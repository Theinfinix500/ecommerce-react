import { Meta, StoryObj } from "@storybook/react";
import  SearchProductPanel  from "./search-product-panel";

const meta = {
  title: "Library/Panels/Search Product Panel",
  component: SearchProductPanel,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    layout: {
      control: "radio",
      options: ["list", "card"],
    },
  },
} satisfies Meta<typeof SearchProductPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    layout: "card",
  },
};
