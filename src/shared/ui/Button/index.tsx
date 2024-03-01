import React from "react";
import { Link as ScrollLink } from "react-scroll";

import styles from "./styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  margin?: string;
  buttonType: "filled" | "outline";
}

interface ScrollButtonProps extends ButtonProps {
  to: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  buttonType,
  margin,
  ...rest
}) => {
  const buttonClass = `${styles.button} hoverable ${styles[`${buttonType}`]} ${
    margin ? margin : ""
  }`;

  return (
    <button className={buttonClass} {...rest}>
      {text}
    </button>
  );
};

export const ScrollButton: React.FC<ScrollButtonProps> = ({
  text,
  buttonType,
  margin,
  to,
}) => {
  const buttonClass = `${
    styles.button
  } hoverable flex items-center justify-center ${styles[`${buttonType}`]} ${
    margin ? margin : ""
  }`;

  return (
    <ScrollLink className={buttonClass} to={to} smooth>
      {text}
    </ScrollLink>
  );
};
