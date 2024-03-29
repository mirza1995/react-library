import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, IButtonProps, TButtonSize, TButtonVariant } from './Button';
import { BasicButton, ButtonsPalette } from './button.composition';
import { fn } from '@storybook/test';

const variantArgTypes: TButtonVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'text',
];
const sizeArgTypes: TButtonSize[] = ['large', 'medium', 'small'];

export default {
  title: 'UI/Button',
  component: BasicButton,
  argTypes: {
    size: {
      control: 'select',
      options: sizeArgTypes,
    },
    variant: {
      control: 'select',
      options: variantArgTypes,
    },
    disabled: {
      control: 'select',
      options: [true, false],
    },
    fullWidth: {
      control: 'select',
      options: [true, false],
    },
    onClick: { action: 'clicked' },
    loading: {
      control: 'radio',
      options: [true, false],
    },
  },
  args: { onClick: fn() },
} as Meta;

const Template = (args: Partial<IButtonProps>) => <BasicButton {...args} />;

export const Default = Template.bind({});

const PaletteTemplate = (args: Partial<IButtonProps>) => (
  <ButtonsPalette {...args} />
);
export const Palette = PaletteTemplate.bind({});

type Story = StoryObj<typeof Button>;
export const Figma: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EsRxMIeKF76aLDARBQIkde/SZ-UI-Kit-2-%E2%80%93-COMPONENT-CANDIDATES?type=design&node-id=36-5933&mode=design&t=DWnujnXCDjBdC5CB-4',
    },
  },
};
