import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import {
  BasicTextInput,
  BasicTextInputWithIcon,
} from './text-input.composition';

describe('TextInput component', () => {
  it('BasicTextInput should render with the correct text', () => {
    const onChangeMock = jest.fn();
    const placeholder = 'Text';
    const input = 'Some text';
    const id = 'text-input-id';
    const { getByPlaceholderText } = render(
      <BasicTextInput
        id={id}
        onChange={onChangeMock}
        placeholder={placeholder}
      />
    );

    fireEvent.change(getByPlaceholderText(placeholder), {
      target: { value: input },
    });
    expect(onChangeMock).toHaveBeenCalledWith(input, id);
  });

  it('should not show focus outline on click', () => {
    const placeholder = 'Text';
    const wrapper = render(
      <BasicTextInputWithIcon
        placeholder={placeholder}
        id="basic-text-input-id"
      />
    );

    fireEvent.click(wrapper.getByPlaceholderText(placeholder));
    expect(wrapper.getByTestId('text-input-wrapper')).not.toHaveClass(
      'sz-text-input_focused'
    );
  });

  it('should toggle password visibility', () => {
    const placeholder = 'Text';
    const wrapper = render(
      <BasicTextInputWithIcon placeholder={placeholder} type="password" />
    );

    const input = wrapper.getByPlaceholderText(placeholder);
    expect(input).toHaveAttribute('type', 'password');

    fireEvent.click(wrapper.getByTestId('password-visibility-button'));
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should handle disabled state', () => {
    const onChangeMock = jest.fn();
    const placeholder = 'Text';
    const wrapper = render(
      <BasicTextInputWithIcon
        onChange={onChangeMock}
        placeholder={placeholder}
        disabled
      />
    );
    expect(wrapper.getByTestId('text-input-wrapper')).toHaveClass(
      'sz-text-input_disabled'
    );
    expect(wrapper.getByPlaceholderText(placeholder)).toHaveAttribute(
      'aria-disabled',
      'true'
    );

    fireEvent.change(wrapper.getByPlaceholderText(placeholder), {
      target: { value: 'test' },
    });
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it('should handle error state', () => {
    const placeholder = 'Text';
    const wrapper = render(
      <BasicTextInputWithIcon placeholder={placeholder} hasError />
    );
    expect(wrapper.getByTestId('text-input-wrapper')).toHaveClass(
      'sz-text-input_error'
    );
    expect(wrapper.getByPlaceholderText(placeholder)).toHaveAttribute(
      'aria-invalid',
      'true'
    );
  });
});
