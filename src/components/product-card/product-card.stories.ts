import { Meta, StoryObj } from "@storybook/react";
import ProductCard from ".";
import productImg from '../../assets/images/1.jpg';

const meta = {
  title: "Library/Cards/Product Card",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    image: productImg
  },
};
