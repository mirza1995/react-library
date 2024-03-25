import clsx from 'clsx';
import React, { FC } from 'react';
import styles from './styles.module.scss';

interface ILoader {
  color?: 'interactive' | 'white' | 'interactive-dark';
  size?: 'large' | 'medium' | 'small';
  className?: string;
}

const Loader: FC<ILoader> = ({
  color = 'interactive',
  size = 'medium',
  className,
}) => {
  return (
    <span
      className={clsx(
        styles.loader,
        styles.animation,
        styles[`loader--color-${color}`],
        styles[`loader--size-${size}`],
        className
      )}
    >
      <div className={styles.bounce1} />
      <div className={styles.bounce2} />
      <div className={styles.bounce3} />
    </span>
  );
};

export default Loader;
