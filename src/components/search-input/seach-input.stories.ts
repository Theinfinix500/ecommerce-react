import { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '.';

const meta = {
  title: 'Library/Components/Search Input',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Search Products',
  },
};
