import './text-input.composition.scss';
import '@/sz-theme/_globalStyles.scss';
import React from 'react';
import PEN from './pen.svg';
import { ITextInputProps, TextInput } from './text-input';

export const BasicTextInput = ({
  id = 'basic-text-input-id',
  ...props
}: Partial<ITextInputProps>) => (
  <div className="text-input-wrapper">
    <TextInput
      id={id}
      placeholder='Placeholder text'
      onChange={() => {}}
      {...props}
    />
  </div>
);

export const ErrorTextInput = ({
  id = 'basic-text-input-id',
  ...props
}: Partial<ITextInputProps>) => (
  <div className="text-input-wrapper">
    <TextInput
      id={id}
      onChange={() => {}}
      {...props}
      hasError
    />
  </div>
);

export const TextInputWithCustomStyle = ({
  id = 'basic-text-input-id',
  ...props
}: Partial<ITextInputProps>) => (
  <div className="text-input-wrapper">
    <TextInput
      id={id}
      className="text-input-with-style"
      onChange={() => {}}
      {...props}
    />
  </div>
);

export const BasicTextInputWithIcon = ({
  id = 'basic-text-input-id',
  ...props
}: Partial<ITextInputProps>) => (
  <div className="text-input-wrapper">
    <TextInput
      id={id}
      onChange={() => {}}
      icon={
        <img
          src={PEN}
          alt="pen-icon"
          className="pen-icon"
        />
      }
      {...props}
    />
  </div>
);
export const BasicPasswordTextInput = ({
  id = 'basic-text-input-id',
  ...props
}: Partial<ITextInputProps>) => (
  <div className="text-input-wrapper">
    <TextInput
      id={id}
      type="password"
      onChange={() => {}}
      {...props}
    />
  </div>
);
