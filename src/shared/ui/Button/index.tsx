import React, { ReactHTMLElement } from "react";

import styles from "./styles.module.scss";

interface ButtonProps extends ReactHTMLElement<HTMLButtonElement> {
  text: string;
  margin: string;
  styleType: "filled" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ text, styleType, margin }) => {
  const buttonClass = `${styles.button} ${styles[`button--${buttonType}`]} ${
    margin ? margin : ""
  }`;

  return <button>index</button>;
};
