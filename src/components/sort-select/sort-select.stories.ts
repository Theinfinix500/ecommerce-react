import { Meta, StoryObj } from "@storybook/react";
import { SortSelect } from ".";

const meta = {
  title: "Library/Components/Sort Select",
  component: SortSelect,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof SortSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Sort",
    options: [{ label: "Test", value: "test" }],
  },
};
