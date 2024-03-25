import clsx from 'clsx';
import React, {
  FC,
  FocusEvent,
  InputHTMLAttributes,
  ReactNode,
  useRef,
  useState,
} from 'react';
import styles from './text-input.module.scss';
import VisibilityIcon from './VisibilityIcon';
import VisibilityShowIcon from './VisibilityShowIcon';

type InputType = 'text' | 'password' | 'email' | 'number';

export interface ITextInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'className' | 'onBlur' | 'onFocus' | 'autoComplete'
  > {
  id: string;
  onChange: (value: string, id: string) => void;
  onBlur?: (value: string, id: string) => void;
  onFocus?: (value: string, id: string) => void;
  value?: string;
  hasError?: boolean;
  className?: string;
  icon?: ReactNode;
  type?: InputType;
  ariaLabel?: string;
  autoComplete?: string;
  required?: boolean;
  revealPasswordIconAriaLabel?: string;
  hidePasswordIconAriaLabel?: string;
}

export const TextInput: FC<ITextInputProps> = ({
  id,
  onChange,
  onBlur,
  onFocus,
  type = 'text',
  disabled,
  hasError,
  icon,
  className,
  onMouseDown,
  onMouseUp,
  ariaLabel,
  revealPasswordIconAriaLabel,
  hidePasswordIconAriaLabel,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const ref = useRef<boolean>(false);

  const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (!ref.current) {
      setFocused(true);
    }
    onFocus?.(e.target.value, id);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    setFocused(false);
    onBlur?.(e.target.value, id);
  };

  const handleMouseUp: React.MouseEventHandler<HTMLInputElement> = (e) => {
    ref.current = false;
    onMouseUp?.(e);
  };

  const handleMouseDown: React.MouseEventHandler<HTMLInputElement> = (e) => {
    ref.current = true;
    onMouseDown?.(e);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevVal) => !prevVal);
  };

  const parsedType = getInputType(type, passwordVisibility);

  return (
    <div
      data-testid="text-input-wrapper"
      aria-describedby={id}
      className={clsx(
        styles['sz-text-input'],
        focused && styles['sz-text-input_focused'],
        hasError && styles['sz-text-input_error'],
        disabled && styles['sz-text-input_disabled'],
        className
      )}
    >
      <div className={styles['sz-text-input__input-wrapper']}>
        <input
          className={styles['sz-text-input__input-element']}
          onChange={(event) => !disabled && onChange?.(event.target.value, id)}
          onBlur={handleBlur}
          onFocus={handleFocus}
          type={parsedType}
          id={id}
          aria-disabled={disabled}
          onMouseUp={handleMouseUp}
          onMouseDown={handleMouseDown}
          aria-label={ariaLabel}
          aria-invalid={hasError}
          aria-describedby={`input-label-${id}`}
          aria-errormessage={`input-error-message-${id}`}
          {...rest}
        />
        <div className={styles['sz-text-input__icon-wrapper']}>{icon}</div>
        {type === 'password' && (
          <button
            onClick={togglePasswordVisibility}
            className={styles['sz-text-input__password-visibility-button']}
            disabled={disabled}
            aria-pressed={passwordVisibility}
            aria-controls={id}
            aria-label={
              passwordVisibility
                ? hidePasswordIconAriaLabel || 'Hide password text'
                : revealPasswordIconAriaLabel || 'Reveal password text'
            }
            data-testid="password-visibility-button"
            type="button"
          >
            {passwordVisibility ? (
              <VisibilityShowIcon
                className={styles['sz-text-input__password-visibility-icon']}
              />
            ) : (
              <VisibilityIcon
                className={styles['sz-text-input__password-visibility-icon']}
              />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

function getInputType(type: InputType, passwordVisibility: boolean) {
  if (type !== 'password') {
    return type;
  }

  return passwordVisibility ? 'text' : 'password';
}
