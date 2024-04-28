import { TogglerButtonProps } from '@src/types';
import { FC } from 'react';

const ExpandButton: FC<TogglerButtonProps> = ({
  icon,
  onClick,
  isFilterOpen,
  label,
  expandedLabel,
}: TogglerButtonProps) => (
  <button type="button" className="expand-button" onClick={onClick}>
    <span className="icon">{icon}</span>
    <span>{isFilterOpen ? expandedLabel || 'Close' : label || 'Open'}</span>
  </button>
);

export default ExpandButton;
