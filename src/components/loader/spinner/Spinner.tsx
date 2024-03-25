import clsx from 'clsx';
import React, { FC } from 'react';
import styles from './styles.module.scss';

export interface SpinnerProps {
  variant?: 'spinner' | 'bubbles';
  color?: 'interactive' | 'white' | 'interactive-dark';
  size?: 'large' | 'medium' | 'small';
  className?: string;
}

const Spinner: FC<SpinnerProps> = ({
  color = 'interactive',
  size = 'medium',
  className,
}) => {
  return (
    <span
      className={clsx(
        styles['loader'],
        styles[`loader--color-${color}`],
        styles[`loader--size-${size}`],
        className
      )}
    />
  );
};

export default Spinner;
