import React from "react";

import styles from "./styles.module.scss";

interface AboutBlockProps {
  number: string;
  paragraph: string;
}

export const AboutBlock: React.FC<AboutBlockProps> = ({
  number,
  paragraph,
}) => {
  return (
    <div className={styles.about_block}>
      <span className={styles.about_block__number}>{number}</span>
      <p className="paragraph mt-2">{paragraph}</p>
    </div>
  );
};
