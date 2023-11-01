import { Meta, Story } from "@storybook/react";
import { ButtonV1, ButtonV1Props } from "./button-v1";

export default {
  title: "Components/ButtonV1",
  component: ButtonV1,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<ButtonV1Props> = (args) => <ButtonV1 {...args} />;

export const Button = Template.bind({});
Button.args = {
  text: "BUTTON",
  className: "bg-black text-white",
};
