import React from 'react';
import { Meta } from '@storybook/react';
import {
  BasicSpinnerLoader,
  SpinnerColorPalette,
  SpinnerSizePalette,
} from './loader.composition';
import { SpinnerProps } from './spinner/Spinner';

const sizeArgTypes = ['large', 'medium', 'small'];
const colorArgTypes = ['interactive', 'white', 'interactive-dark'];

export default {
  title: 'UI/Loader',
  component: BasicSpinnerLoader,
  types: ["autodocs"],
  argTypes: {
    size: {
      control: 'select',
      options: sizeArgTypes,
    },
    color: {
      control: 'select',
      options: colorArgTypes,
    },
    variant: {
      control: 'select',
      options: ['spinner', 'bubbles']
    }
  },
} as Meta;

const Template = (args: SpinnerProps) => <BasicSpinnerLoader {...args} />;

export const Default = Template.bind({});

const LoaderColorPaletteTemplate = () => <SpinnerColorPalette />;

export const ColorPalette = LoaderColorPaletteTemplate.bind({});

const LoaderSizePaletteTemplate = () => <SpinnerSizePalette />;

export const SizePalette = LoaderSizePaletteTemplate.bind({});
