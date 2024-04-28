import { FooterControlsProps } from '@src/types';
import { FC } from 'react';

const FooterControls: FC<FooterControlsProps> = ({ onClear, onApply, canApply }) => (
  <div className="infinite-filter-footer-controls">
    <div className="infinite-filter-footer-controls-inner">
      <div />
      <div className="infinite-filter-footer-controls-buttons">
        <button type="button" onClick={onClear}>
          Clear
        </button>
        <button type="button" className="primary" onClick={onApply} disabled={!canApply}>
          Apply
        </button>
      </div>
    </div>
  </div>
);

export default FooterControls;
