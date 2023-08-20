import { Meta, StoryObj } from "@storybook/react";
import FilterSelect from "./filter-select";

const meta = {
  title: "Library/Components/Filter Select",
  component: FilterSelect,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof FilterSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Test'
  },
};
