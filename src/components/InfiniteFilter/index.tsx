import { FC, useState } from 'react';
import { InfiniteFilterProps } from '@src/types';
import './index.css';

const InfiniteFilter: FC<InfiniteFilterProps> = (props: InfiniteFilterProps) => {
  const { label } = props;
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((e) => !e);
  };

  return (
    <div className="main-wrapper" data-expaned={expanded}>
      <button type="button" className="glow-on-hover" onClick={toggleExpanded}>
        {label}
      </button>
    </div>
  );
};
export default InfiniteFilter;
