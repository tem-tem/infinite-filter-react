import { ContentListProps } from '@src/types';
import { FC } from 'react';
import ListItem from './ListItem';

const ContentList: FC<ContentListProps> = ({ activeStep, lists, selectedOptions, onSelect }) => (
  <div className="content-list">
    {lists.map((optionsList, listIndex) => (
      <div
        key={optionsList.map((o) => o.value).join('-')}
        className="content-list-inner"
        data-active={listIndex === activeStep}
        data-past={listIndex < activeStep}
        data-future={listIndex > activeStep}
        style={{ transform: `translateX(${listIndex - activeStep}00%)` }}
      >
        {optionsList.map((option, optionIndex) => (
          <ListItem
            key={option.value}
            option={option}
            isSelected={selectedOptions.some((so) => so.value === option.value)}
            onClick={() => onSelect(option, optionIndex, listIndex)}
          />
        ))}
      </div>
    ))}
  </div>
);

export default ContentList;
