import { Meta, StoryObj } from "@storybook/react";
import { Pager } from ".";

const meta = {
  title: "Library/Components/Pager",
  component: Pager,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Pager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
