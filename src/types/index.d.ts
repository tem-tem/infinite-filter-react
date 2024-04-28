export interface Option {
  label: string;
  value: string;
  _listIndex?: number;
}
export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface InfiniteFilterProps {
  lists: Option[][];
  toggleLabel?: string;
  toggleLabelExpanded?: string;
  onApply: (selectedOptions: Option[]) => void;
}

export interface TogglerButtonProps {
  icon: JSX.Element | string;
  label: string;
  expandedLabel: string;
  onClick: () => void;
  isFilterOpen: boolean;
}

export interface ContentListProps {
  lists: Option[][];
  selectedOptions: Option[];
  activeStep: number;
  onSelect: (item: Option, itemIndex: number, listIndex: number) => void;
}

export interface ListItemProps {
  option: Option;
  isSelected: boolean;
  onClick: (option: Option) => void;
}

export interface FooterControlsProps {
  onClear: () => void;
  onApply: () => void;
  canApply: boolean;
}
