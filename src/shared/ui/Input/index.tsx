import React from "react";

import styles from "./styles.module.scss";

interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  margin?: string;
  type: string;
}

export const Input: React.FC<Input> = ({
  labelText,
  margin,
  type,
  ...rest
}) => {
  return (
    <div className={`${styles.input_container} ${margin} hoverable`} {...rest}>
      <label className={`${styles.input_container__label} hoverable`}>
        {labelText}
      </label>
      <input
        type={type}
        className={`${styles.input_container__input} hoverable`}
      />
    </div>
  );
};
