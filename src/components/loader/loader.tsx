import React, { FC } from 'react';
import Bubbles from './bubbles/Bubbles';
import Spinner from './spinner/Spinner';
import style from './styles.module.scss';

export interface LoaderProps {
  variant?: 'spinner' | 'bubbles';
  color?: 'interactive' | 'white' | 'interactive-dark';
  size?: 'large' | 'medium' | 'small';
  isPageLoader?: boolean;
  className?: string;
}

export const Loader: FC<LoaderProps> = ({
  variant = 'spinner',
  color = 'interactive',
  size = 'medium',
  isPageLoader,
  className,
}) => {
  return (
    <div
      data-testid="loader"
      className={
        isPageLoader ? style['page-loader-wrapper'] : style['loader__wrapper']
      }
    >
      {variant === 'spinner' ? (
        <Spinner
          color={color}
          size={size}
          className={className}
        />
      ) : (
        <Bubbles
          color={color}
          size={size}
          className={className}
        />
      )}
    </div>
  );
};
