import useState from 'storybook-addon-state';
import InfiniteFilter from '../src/components/InfiniteFilter';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const soda = [
  { label: 'Coca Cola', value: 'coca-cola' },
  { label: 'Pepsi', value: 'pepsi' },
  { label: 'Dr. Pepper', value: 'dr-pepper' },
  { label: 'Sprite', value: 'sprite' },
  { label: 'Mountain Dew', value: 'mountain-dew' },
  { label: 'Fanta', value: 'fanta' },
  { label: '7 Up', value: '7-up' },
  { label: 'A&W Root Beer', value: 'a-w-root-beer' },
  { label: 'Barq\'s Root Beer', value: 'barqs-root-beer' },
  { label: 'Canada Dry', value: 'canada-dry' },
];

const juice = [
  { label: 'Apple Juice', value: 'apple-juice' },
  { label: 'Orange Juice', value: 'orange-juice' },
  { label: 'Grape Juice', value: 'grape-juice' },
  { label: 'Cranberry Juice', value: 'cranberry-juice' },
  { label: 'Pineapple Juice', value: 'pineapple-juice' },
  { label: 'Tomato Juice', value: 'tomato-juice' },
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

const Template: ComponentStory<typeof InfiniteFilter> = (args) => {
  const [selectedOptions, setSelectedOptions] = useState('options', []);

  const handleApplyClick = (selectedOptions: []) => {
    setSelectedOptions(selectedOptions);
  }

  const handleSelectClick = (selectedOption: any) => {
    console.log(selectedOption);
  }

  const handleClearClick = () => {
    setSelectedOptions([]);
  }

  return (
    <>
      <div>
        Selected options:
      </div>
      <div>
        {(selectedOptions || [])?.map((option: any) => (
          <div key={option.value}>
            {option.label}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400, width: 300 }}>
        <InfiniteFilter
          lists={lists}
          toggleLabel="Filter Beverages"
          toggleLabelExpanded="Filter Beverages"
          onApply={handleApplyClick}
          onSelect={handleSelectClick}
          onClear={handleClearClick}
        />
      </div>
    </>
  )
};


export const Primary = Template.bind({});
