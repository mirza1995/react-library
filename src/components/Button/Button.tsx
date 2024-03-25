import React from "react";
import styles from "./Button.module.scss";
import { Loader } from '../loader';

export interface ButtonProps {
  label: string;
}

export const Button = (props: ButtonProps) => {
  return <button className={styles.button}>{props.label} <Loader /></button>;
};