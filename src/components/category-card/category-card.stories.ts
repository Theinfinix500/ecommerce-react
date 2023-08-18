import { Meta, StoryObj } from "@storybook/react";
import categoryImage from "../../assets/images/category-1.jpg";
import { CategoryCard } from ".";

const meta = {
  title: "Library/Cards/Category Card",
  component: CategoryCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof CategoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    image: categoryImage,
  },
};
