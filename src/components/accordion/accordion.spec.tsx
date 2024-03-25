import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Basic } from './accordion.composition';

describe('Accordion Component', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<Basic />);
    const accordionItem = getByText('Title');

    expect(accordionItem).toBeInTheDocument();
  });

  it('should show additional content on click', () => {
    const { getByText } = render(<Basic />);
    const accordionItem = getByText('Title');

    fireEvent.click(accordionItem);

    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('should show disabled accordion item', () => {
    const { getByText } = render(<Basic disabled/>);
    const accordionItem = getByText('Title');

    //Parent element is button which has this property
    expect(accordionItem.parentElement).toHaveAttribute(
      'aria-disabled',
      'true'
    );
  });
});
