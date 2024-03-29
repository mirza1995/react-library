import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ITextInputProps, TextInput } from './text-input';
import {
  BasicTextInput,
  BasicTextInputWithIcon,
  TextInputWithCustomStyle,
} from './text-input.composition';

export default {
  title: 'UI/TextInput',
  component: BasicTextInput,
  types: ["autodocs"],
  args: {
    placeholder: 'Enter text...',
  },
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blured' },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} as Meta;

const Template = (args: Partial<ITextInputProps>) => (
  <BasicTextInput {...args} />
);

export const Default = Template.bind({});

const TextInputWithCustomStyleTemplate = (args: Partial<ITextInputProps>) => (
  <TextInputWithCustomStyle {...args} />
);

export const WithCustomStyle = TextInputWithCustomStyleTemplate.bind({});

const BasicTextInputWithIconTemplate = (args: Partial<ITextInputProps>) => (
  <BasicTextInputWithIcon {...args} />
);

export const WithIcon = BasicTextInputWithIconTemplate.bind({});


type Story = StoryObj<typeof TextInput>;
export const Figma: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EsRxMIeKF76aLDARBQIkde/SZ-UI-Kit-2-%E2%80%93-COMPONENT-CANDIDATES?type=design&node-id=127-7192&mode=design&t=DWnujnXCDjBdC5CB-4',
    },
  },
};
