import React from "react";
import "src/sz-theme/_globalStyles.scss"
import { Meta, StoryObj } from "@storybook/react";
import { AccordionArgs, Basic, WithPercentileIconInTitle } from "./accordion.composition";
import { Accordion } from "./accordion";

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

type Story = StoryObj<typeof Accordion>;
export const Figma: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EsRxMIeKF76aLDARBQIkde/SZ-UI-Kit-2-%E2%80%93-COMPONENT-CANDIDATES?type=design&node-id=223-7487&mode=design&t=DWnujnXCDjBdC5CB-4',
    },
  },
};

  
