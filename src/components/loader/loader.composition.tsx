import './loader.composition.scss';
import React from 'react';
import { Loader, LoaderProps } from './loader';

export const BasicSpinnerLoader = (props: Partial<LoaderProps>) => {
  return <Loader {...props} />;
};

export const SpinnerColorPalette = () => {
  return (
    <div className="loader-palette-composition">
      <Loader color="interactive" />
      <Loader color="interactive-dark" />
      <div className="loader-palette-composition__white-loader-wrapper">
        <Loader color="white" />
      </div>
    </div>
  );
};

export const SpinnerSizePalette = () => {
  return (
    <div className="loader-palette-composition">
      <Loader size="large" />
      <Loader size="medium" />
      <Loader size="small" />
    </div>
  );
};

export const BasicBubblesLoader = () => {
  return <Loader variant="bubbles" />;
};

export const BubblesColorPalette = () => {
  return (
    <div className="loader-palette-composition">
      <Loader
        variant="bubbles"
        color="interactive-dark"
      />
      <Loader
        variant="bubbles"
        color="interactive"
      />
      <div className="loader-palette-composition__white-loader-wrapper">
        <Loader
          variant="bubbles"
          color="white"
        />
      </div>
    </div>
  );
};

export const BubblesSizePalette = () => {
  return (
    <div className="loader-palette-composition">
      <Loader
        variant="bubbles"
        size="large"
      />
      <Loader
        variant="bubbles"
        size="medium"
      />
      <Loader
        variant="bubbles"
        size="small"
      />
    </div>
  );
};

export const PageLoader = () => {
  return (
    <Loader
      variant="bubbles"
      isPageLoader
    />
  );
};
