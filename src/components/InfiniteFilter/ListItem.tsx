import { ListItemProps } from '@src/types';
import { FC } from 'react';

const chevronRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

const ListItem: FC<ListItemProps> = ({ option, isSelected, onClick }: ListItemProps) => (
  <button
    type="button"
    key={option.value}
    onClick={() => onClick(option)}
    className="list-item"
    data-selected={isSelected}
  >
    <span>{option.label}</span>
    <span className="icon">{chevronRight}</span>
  </button>
);

export default ListItem;
