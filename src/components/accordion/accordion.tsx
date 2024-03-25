import React, { ReactNode } from 'react';
import styles from './accordion.module.scss';

export type AccordionProps = {
  children?: ReactNode;
};

export function Accordion({ children }: AccordionProps) {
  return <ul className={styles.accordion}>{children}</ul>;
}
