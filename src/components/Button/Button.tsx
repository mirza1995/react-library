import clsx from 'clsx';
import React, {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  MouseEventHandler,
  ReactNode,
} from 'react';
import style from './Button.module.scss';
import { Loader } from '../loader';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: TButtonVariant;
  size?: TButtonSize;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  ariaLabel?: string;
  loading?: boolean;
  counter?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type TButtonSize = 'large' | 'medium' | 'small';
export type TButtonVariant = 'primary' | 'secondary' | 'text' | 'tertiary';

const ButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  IButtonProps
> = (
  {
    children,
    size = 'large',
    variant = 'primary',
    className,
    fullWidth,
    disabled,
    leftIcon,
    rightIcon,
    ariaLabel,
    loading,
    counter,
    onClick,
    ...rest
  },
  ref
) => (
  <button
    ref={ref}
    className={clsx(
      style['button'],
      style[`button--size-${size}`],
      style[`button--variant-${variant}`],
      loading && style['button--loading'],
      fullWidth && style[`button--full-width`],
      className
    )}
    aria-disabled={disabled}
    aria-label={ariaLabel}
    onClick={(e) => !disabled && !loading && onClick?.(e)}
    {...rest}
  >
    <div className={clsx('button__content', style['button__content'])}>
      {leftIcon && !loading && (
        <div className={clsx(style['button__left-icon-wrapper'])}>
          {leftIcon}
        </div>
      )}
      {children}
      {rightIcon && !loading && (
        <div className={clsx(style['button__right-icon-wrapper'])}>
          {rightIcon}
        </div>
      )}
      {loading && (
        <Loader
          className={style['button__loader']}
          size="small"
        />
      )}
      {counter && !loading && !rightIcon && (
        <div className={clsx(style['button__counter-wrapper'])}>{counter}</div>
      )}
    </div>
  </button>
);

export const Button = forwardRef(ButtonComponent);
