import InfiniteFilter from '../src/components/InfiniteFilter';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const soda = [
  { label: 'Coca Cola', value: 'coca-cola' },
  { label: 'Pepsi', value: 'pepsi' },
  { label: 'Dr. Pepper', value: 'dr-pepper' },
  { label: 'Sprite', value: 'sprite' },
  { label: 'Mountain Dew', value: 'mountain-dew' },
];

const juice = [
  { label: 'Apple Juice', value: 'apple-juice' },
  { label: 'Orange Juice', value: 'orange-juice' },
  { label: 'Grape Juice', value: 'grape-juice' },
  { label: 'Cranberry Juice', value: 'cranberry-juice' },
  { label: 'Pineapple Juice', value: 'pineapple-juice' },
];

const water = [
  { label: 'Dasani', value: 'dasani' },
  { label: 'Aquafina', value: 'aquafina' },
  { label: 'Fiji', value: 'fiji' },
  { label: 'Evian', value: 'evian' },
  { label: 'Smart Water', value: 'smart-water' },
];

const lists = [soda, juice, water];

export default {
  title: 'Filters/InfiniteFilter',
  component: InfiniteFilter,
} as ComponentMeta<typeof InfiniteFilter>;

const Template: ComponentStory<typeof InfiniteFilter> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400, width: 300 }}>
    <InfiniteFilter
      lists={lists}
      toggleLabel="Filter Beverages"
      toggleLabelExpanded="Filter Beverages"
      onApply={() => console.warn('Clicked')}
      />
  </div>
);

export const Primary = Template.bind({});
