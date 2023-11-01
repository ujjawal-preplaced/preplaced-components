import { Meta, Story } from "@storybook/react";
import {
  LoaderWithThreeDots,
  LoaderWithThreeDotsProps,
} from "./loader-with-three-dots";

export default {
  title: "Components/LoaderWithThreeDots",
  component: LoaderWithThreeDots,
} as Meta;

const Template: Story<LoaderWithThreeDotsProps> = (args) => (
  <LoaderWithThreeDots {...args} />
);

export const Loader = Template.bind({});
