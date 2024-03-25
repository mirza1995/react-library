import React from "react";
import "src/sz-theme/_globalStyles.scss"
import { Meta } from "@storybook/react";
import { AccordionArgs, Basic, WithPercentileIconInTitle } from "./accordion.composition";

export default {
  title: 'UI/Accordion',
  component: Basic,
  argTypes: {
    title: {
      control: 'text'
    },
    smallTitle: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  },
} as Meta;

export const Default = (args: AccordionArgs) => <Basic {...args} />;

export const WithPercentileIconInTitleTemplate = () => <WithPercentileIconInTitle />;

  
