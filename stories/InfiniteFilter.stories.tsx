import InfiniteFilter from '../src/components/InfiniteFilter';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Filters/InfiniteFilter',
  component: InfiniteFilter,
} as ComponentMeta<typeof InfiniteFilter>;

const Template: ComponentStory<typeof InfiniteFilter> = (args) => (
  <InfiniteFilter label="Filter Beverages" onClick={() => console.warn('Clicked')} />
);

export const Primary = Template.bind({});
