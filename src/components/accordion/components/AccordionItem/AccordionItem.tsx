import React, { useState } from 'react';
import { ArrowDownIcon } from '../ArrowDownIcon/ArrowDownIcon';
import styles from './accordion-item.module.scss';
import clsx from 'clsx';

export type AccordionItemProps = {
  children: React.ReactNode;
  title: string | React.ReactNode;
  id: string;
  withBottomBorder?: boolean;
  smallTitle?: boolean;
  ariaLabel?: string;
  opened?: boolean;
  disabled?: boolean;
};

export const AccordionItem = ({
  children,
  title,
  id,
  withBottomBorder,
  smallTitle = false,
  ariaLabel,
  opened = false,
  disabled = false,
}: AccordionItemProps) => {
  const [expanded, setExpanded] = useState(opened);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const contentId = `accordion-item-content-${id}`;

  return (
    <li
      className={clsx(
        styles.accordionItem,
        withBottomBorder && styles.withBottomBorder,
        disabled && styles.disabled
      )}
      aria-disabled={disabled}
    >
      <button
        type="button"
        aria-controls={contentId}
        aria-expanded={expanded}
        className={styles.heading}
        onClick={handleClick}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={ariaLabel}
      >
        <ArrowDownIcon
          className={clsx(expanded && styles.expanded, styles.arrowDown)}
        />
        <div className={clsx(styles.title, smallTitle && styles.smallTitle)}>
          {title}
        </div>
      </button>
      <div
        id={contentId}
        className={clsx(styles.content, !expanded && styles.hidden)}
      >
        {children}
      </div>
    </li>
  );
};
