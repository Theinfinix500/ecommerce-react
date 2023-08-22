import { Meta, StoryObj } from "@storybook/react";
import categoryImage from "../../assets/images/category-1.jpg";
import  SearchCategoryCard  from "./search-category-card";

const meta = {
  title: "Library/Cards/Search Category Card",
  component: SearchCategoryCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof SearchCategoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    image: categoryImage,
  },
};
