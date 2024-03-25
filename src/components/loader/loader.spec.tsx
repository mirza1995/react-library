import React from 'react';
import { render } from '@testing-library/react';
import {
  BasicBubblesLoader,
  BasicSpinnerLoader,
  BubblesColorPalette,
  BubblesSizePalette,
  PageLoader,
  SpinnerColorPalette,
  SpinnerSizePalette,
} from './loader.composition';

describe('Loader', () => {
  it('Basic Loader snapshot', () => {
    const wrapper = render(<BasicSpinnerLoader />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Loader colors snapshot', () => {
    const wrapper = render(<SpinnerColorPalette />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Loader sizes snapshot', () => {
    const wrapper = render(<SpinnerSizePalette />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Basic Loader snapshot - Bubbles', () => {
    const wrapper = render(<BasicBubblesLoader />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Loader sizes snapshot - Bubbles', () => {
    const wrapper = render(<BubblesSizePalette />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Page Loader snapshot', () => {
    const wrapper = render(<PageLoader />);

    expect(wrapper).toMatchSnapshot();
  });
});
