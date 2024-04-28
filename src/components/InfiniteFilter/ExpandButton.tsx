import { TogglerButtonProps } from '@src/types';
import { FC } from 'react';

const ExpandButton: FC<TogglerButtonProps> = ({
  icon,
  onClick,
  isFilterOpen,
  label,
  expandedLabel,
}: TogglerButtonProps) => (
  <button type="button" className="infinite-filter-expand-button" onClick={onClick}>
    <span className="infinite-filter-icon">{icon}</span>
    <span>{isFilterOpen ? expandedLabel || 'Close' : label || 'Open'}</span>
  </button>
);

export default ExpandButton;
