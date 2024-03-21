import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  label: string;
}

export const Button = (props: ButtonProps) => {
  return <button className={styles.button}>{props.label}</button>;
};