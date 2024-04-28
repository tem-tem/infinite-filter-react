import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { InfiniteFilterProps, Option } from '@src/types';
import ExpandButton from './ExpandButton';
import ContentList from './ContentList';
import FooterControls from './FooterControls';

const filterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
    />
  </svg>
);

const closeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const InfiniteFilter: FC<InfiniteFilterProps> = (props: InfiniteFilterProps) => {
  const { lists, toggleLabel, toggleLabelExpanded, onApply, onSelect, onClear } = props;
  const [savedDimensions, setSavedDimensions] = useState({ width: 0, height: 0 });
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOptions, setselectedOptions] = useState<Option[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveStep(0);
  }, []);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.clientWidth;
      const height = ref.current.clientHeight;
      setSavedDimensions({ width, height });
      ref.current.dataset.expanded = 'false';
      ref.current.style.width = `${width}px`;
      ref.current.style.height = `${height}px`;
    }
  }, []);

  const toggleExpanded = useCallback(() => {
    const element = ref.current;
    if (!element) return;
    if (element.dataset.expanded === 'false') {
      setIsExpanded(true);
      element.style.width = '100%';
      element.style.height = '100%';
      element.dataset.expanded = 'true';
    } else {
      setIsExpanded(false);
      element.style.width = `${savedDimensions.width}px`;
      element.style.height = `${savedDimensions.height}px`;
      element.dataset.expanded = 'false';
    }
  }, [savedDimensions.height, savedDimensions.width, ref]);

  const advanceStep = () => {
    setActiveStep((s) => {
      if (s < lists.length - 1) {
        return s + 1;
      }
      return s;
    });
  };

  const handleListOptionSelect = (option: Option, _: number, listIndex: number) => {
    let adding = true;
    setselectedOptions((currentSelection) => {
      const clickedOption = { ...option, _listIndex: listIndex };

      if (onSelect) onSelect(clickedOption);

      // filter out currently selected option in the lists[listIndex]
      const filteredSelection = currentSelection.filter((i) => i._listIndex !== listIndex);

      const clickedOptionIndexInCurrentSelection = filteredSelection.findIndex(
        (fs) => fs.value === clickedOption.value,
      );

      if (clickedOptionIndexInCurrentSelection === -1) {
        return [...filteredSelection, clickedOption];
      }
      adding = false;
      return filteredSelection.filter((fs) => fs.value !== clickedOption.value);
    });

    if (adding) advanceStep();
  };

  const handleClearClick = () => {
    if (onClear) onClear();
    setActiveStep(0);
    setselectedOptions([]);
  };

  const handleApplyClick = () => {
    onApply(selectedOptions);
    setActiveStep(0);
    toggleExpanded();
  };

  return (
    <div className="infinite-filter-main-wrapper" ref={ref} data-expanded="false">
      <ExpandButton
        icon={isExpanded ? closeIcon : filterIcon}
        onClick={toggleExpanded}
        isFilterOpen={isExpanded}
        label={toggleLabel || 'Open'}
        expandedLabel={toggleLabelExpanded || 'Close'}
      />
      <ContentList
        lists={lists}
        selectedOptions={selectedOptions}
        activeStep={activeStep}
        onSelect={handleListOptionSelect}
      />
      <FooterControls onClear={handleClearClick} onApply={handleApplyClick} canApply={selectedOptions.length > 0} />
    </div>
  );
};
export default InfiniteFilter;
