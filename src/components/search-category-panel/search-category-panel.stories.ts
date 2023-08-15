import { Meta, StoryObj } from "@storybook/react";
// import categoryImage from "../../assets/images/category-1.jpg";
import SearchCategoryPanel from ".";

const meta = {
  title: "Library/Panels/Search Category Panel",
  component: SearchCategoryPanel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SearchCategoryPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
