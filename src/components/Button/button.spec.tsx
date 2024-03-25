import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TButtonSize, TButtonVariant } from './button';
import { BasicButton } from './button.composition';
import PenIcon from './components/PenIcon';

describe('Button', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(
      <BasicButton children={''} onClick={() => {}} />
    );
    const rendered = getByText('Click me!');
    expect(rendered).toBeTruthy();
  });

  it('should call provided onClick function', () => {
    const onClickMock = jest.fn();
    render(<BasicButton onClick={onClickMock} children={''} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('should handle disabled state', () => {
    const onClickMock = jest.fn();
    render(<BasicButton onClick={onClickMock} children={''} disabled />);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('aria-disabled', 'true');

    fireEvent.click(button);
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('should render correctly when left icon provided', () => {
    render(<BasicButton leftIcon={<PenIcon />} children={''} disabled />);

    expect(screen.getByTestId('pen-icon')).toBeInTheDocument();
  });

  it('should render correctly when right icon provided', () => {
    render(<BasicButton rightIcon={<PenIcon />} children={''} disabled />);

    expect(screen.getByTestId('pen-icon')).toBeInTheDocument();
  });

  it('should render full width button', () => {
    render(<BasicButton children={''} fullWidth />);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('button--full-width');
  });

  describe('variants', () => {
    const cases: TButtonVariant[][] = [
      ['primary'],
      ['secondary'],
      ['text'],
      ['tertiary'],
    ];

    test.each(cases)('should handle %p variant', (variant) => {
      render(<BasicButton children={''} variant={variant} />);
      const button = screen.getByRole('button');

      expect(button).toHaveClass(`button--variant-${variant}`);
    });
  });

  describe('sizes', () => {
    const cases: TButtonSize[][] = [['large'], ['medium'], ['small']];

    test.each(cases)('should handle %p size', (size) => {
      render(<BasicButton children={''} size={size} />);
      const button = screen.getByRole('button');

      expect(button).toHaveClass(`button--size-${size}`);
    });
  });

  describe('loading state', () => {
    it('should not call provided onClick in loading state', () => {
      const onClickMock = jest.fn();
      render(<BasicButton onClick={onClickMock} children={''} loading />);
      const button = screen.getByRole('button');

      expect(screen.getAllByTestId('loader').length).toEqual(1);
      fireEvent.click(button);
      expect(onClickMock).not.toHaveBeenCalled();
    });

    it('should render loader icon instead of provided one in loading state', () => {
      render(<BasicButton children={''} loading rightIcon={<PenIcon />} />);
      expect(screen.getAllByTestId('loader').length).toEqual(1);
      expect(screen.queryByTestId('pen-icon')).toBeNull();
    });
  });
});
