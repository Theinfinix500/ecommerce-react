import { ProductCard } from ".";
import { Meta, StoryObj } from "@storybook/react";
import productImg from "../../assets/images/1.jpg";

const meta = {
  title: "Library/Cards/Product Card",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    image: productImg,
  },
};
