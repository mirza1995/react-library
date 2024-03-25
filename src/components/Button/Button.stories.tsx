import React from 'react';
import { Meta } from '@storybook/react';
import { IButtonProps, TButtonSize, TButtonVariant } from './Button';
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
