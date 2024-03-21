import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import {Button} from "./Button";

const meta = {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
      label: 'Hello world!',
    },
  };

  export const ClickMe: Story = {
    args: {
      label: 'Click me',
    },
  };
