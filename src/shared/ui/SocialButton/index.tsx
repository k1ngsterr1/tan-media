import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.scss";

interface SocialButtonProps {
  icon: IconDefinition;
  onClick: () => void;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  onClick,
}) => {
  return (
    <button className={`${styles.button} hoverable`} onClick={onClick}>
      <FontAwesomeIcon
        className={`${styles.button__icon} hoverable`}
        icon={icon}
      />
    </button>
  );
};
