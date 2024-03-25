import './button.composition.scss';
import React from 'react';
import { Button, IButtonProps } from './button';
import PenIcon from './components/PenIcon';

export const BasicButton = (args: Partial<IButtonProps>) => (
  <Button {...args}>Click me!</Button>
);

export const ButtonsPalette = (args: Partial<IButtonProps>) => (
  // TODO: Remove after creating composition context. [EN-283]
  <div className="buttons-palette-wrapper">
    <div className="buttons-palette-row">
      <div className="buttons-palette-label">Primary</div>
      <Button
        {...args}
        variant="primary"
        size="large"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Large Button
      </Button>
      <Button
        {...args}
        variant="primary"
        size="large"
        disabled
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Large Button
      </Button>
      <Button
        {...args}
        variant="primary"
        size="large"
        loading
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Large Button
      </Button>
      {/* <Button
        {...args}
        variant="primary"
        size="large"
        leftIcon={<FilterIcon />}
        counter={8}
      >
        Large Button
      </Button> */}
    </div>
    <div className="buttons-palette-row">
      <div className="buttons-palette-label">Secondary</div>
      <Button
        {...args}
        variant="secondary"
        size="large"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Large Button
      </Button>
      <Button
        {...args}
        variant="secondary"
        size="large"
        disabled
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Large Button
      </Button>
      <Button
        {...args}
        variant="secondary"
        size="large"
        loading
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Large Button
      </Button>
      {/* <Button
        {...args}
        variant="secondary"
        size="large"
        leftIcon={<FilterIcon />}
        counter={8}
      >
        Large Button
      </Button> */}
    </div>
    <div className="buttons-palette-row">
      <div className="buttons-palette-label">Tertiary</div>
      <Button
        {...args}
        variant="tertiary"
        size="large"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Large Button
      </Button>
      <Button
        {...args}
        variant="tertiary"
        size="large"
        disabled
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Large Button
      </Button>
      <Button
        {...args}
        variant="tertiary"
        size="large"
        loading
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Large Button
      </Button>
      {/* <Button
        {...args}
        variant="tertiary"
        size="large"
        leftIcon={<FilterIcon />}
        counter={8}
      >
        Large Button
      </Button> */}
    </div>
    <div className="buttons-palette-row">
      <div className="buttons-palette-label">Text</div>
      <Button
        {...args}
        variant="text"
        size="large"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Large Button
      </Button>
      <Button
        {...args}
        variant="text"
        size="large"
        disabled
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Large Button
      </Button>
      <Button
        {...args}
        variant="text"
        size="large"
        loading
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Large Button
      </Button>
      {/* <Button
        {...args}
        variant="text"
        size="large"
        leftIcon={<FilterIcon />}
        counter={8}
      >
        Large Button
      </Button> */}
    </div>
    <div className="buttons-palette-row">
      <div className="buttons-palette-label">Primary</div>
      <Button
        {...args}
        variant="primary"
        size="medium"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Medium Button
      </Button>
      <Button
        {...args}
        disabled
        variant="primary"
        size="medium"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Medium Button
      </Button>
      <Button
        {...args}
        loading
        variant="primary"
        size="medium"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Medium Button
      </Button>
      {/* <Button
        {...args}
        variant="primary"
        size="medium"
        leftIcon={<FilterIcon />}
        counter={8}
      >
        Medium Button
      </Button> */}
    </div>
    <div className="buttons-palette-row">
      <div className="buttons-palette-label">Secondary</div>
      <Button
        {...args}
        variant="secondary"
        size="medium"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Medium Button
      </Button>
      <Button
        {...args}
        disabled
        variant="secondary"
        size="medium"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Medium Button
      </Button>
      <Button
        {...args}
        loading
        variant="secondary"
        size="medium"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Medium Button
      </Button>
      {/* <Button
        {...args}
        variant="secondary"
        size="medium"
        leftIcon={<FilterIcon />}
        counter={8}
      >
        Medium Button
      </Button> */}
    </div>
    <div className="buttons-palette-row">
      <div className="buttons-palette-label">Tertiary</div>
      <Button
        {...args}
        variant="tertiary"
        size="medium"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Medium Button
      </Button>
      <Button
        {...args}
        disabled
        variant="tertiary"
        size="medium"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Medium Button
      </Button>
      <Button
        {...args}
        loading
        variant="tertiary"
        size="medium"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Medium Button
      </Button>
      {/* <Button
        {...args}
        variant="tertiary"
        size="medium"
        leftIcon={<FilterIcon />}
        counter={8}
      >
        Medium Button
      </Button> */}
    </div>
    <div className="buttons-palette-row">
      <div className="buttons-palette-label">Text</div>
      <Button
        {...args}
        variant="text"
        size="medium"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Medium Button
      </Button>
      <Button
        {...args}
        disabled
        variant="text"
        size="medium"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Medium Button
      </Button>
      <Button
        {...args}
        loading
        variant="text"
        size="medium"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Medium Button
      </Button>
      {/* <Button
        {...args}
        variant="text"
        size="medium"
        leftIcon={<FilterIcon />}
        counter={8}
      >
        Medium Button
      </Button> */}
    </div>
    <div className="buttons-palette-row">
      <div className="buttons-palette-label">Primary</div>
      <Button
        {...args}
        variant="primary"
        size="small"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Small Button
      </Button>
      <Button
        {...args}
        disabled
        variant="primary"
        size="small"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Small Button
      </Button>
      <Button
        {...args}
        loading
        variant="primary"
        size="small"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Small Button
      </Button>
      {/* <Button
        {...args}
        variant="primary"
        size="small"
        leftIcon={<FilterIcon />}
        counter={8}
      >
        Small Button
      </Button> */}
    </div>
    <div className="buttons-palette-row">
      <div className="buttons-palette-label">Secondary</div>
      <Button
        {...args}
        variant="secondary"
        size="small"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Small Button
      </Button>
      <Button
        {...args}
        disabled
        variant="secondary"
        size="small"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Small Button
      </Button>
      <Button
        {...args}
        loading
        variant="secondary"
        size="small"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Small Button
      </Button>
      {/* <Button
        {...args}
        variant="secondary"
        size="small"
        leftIcon={<FilterIcon />}
        counter={8}
      >
        Small Button
      </Button> */}
    </div>
    <div className="buttons-palette-row">
      <div className="buttons-palette-label">Tertiary</div>
      <Button
        {...args}
        variant="tertiary"
        size="small"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Small Button
      </Button>
      <Button
        {...args}
        disabled
        variant="tertiary"
        size="small"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Small Button
      </Button>
      <Button
        {...args}
        variant="tertiary"
        size="small"
        loading
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Small Button
      </Button>
      {/* <Button
        {...args}
        variant="tertiary"
        size="small"
        leftIcon={<FilterIcon />}
        counter={8}
      >
        Small Button
      </Button> */}
    </div>
    <div className="buttons-palette-row">
      <div className="buttons-palette-label">Text</div>
      <Button
        {...args}
        variant="text"
        size="small"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Small Button
      </Button>
      <Button
        {...args}
        disabled
        variant="text"
        size="small"
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Small Button
      </Button>
      <Button
        {...args}
        variant="text"
        size="small"
        loading
        leftIcon={<PenIcon />}
        rightIcon={<PenIcon />}
      >
        Small Button
      </Button>
      {/* <Button
        {...args}
        variant="text"
        size="small"
        leftIcon={<FilterIcon />}
        counter={8}
      >
        Small Button
      </Button> */}
    </div>
  </div>
);

export const ButtonWithFullWidth = (args: Partial<IButtonProps>) => (
  <Button
    {...args}
    fullWidth
  >
    Click me!
  </Button>
);
