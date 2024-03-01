import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ContactCardProps {
  role: string;
  name: string;
  number: string;
  email: string;
  icon: IconDefinition;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  name,
  role,
  number,
  email,
  icon,
}) => {
  return (
    <div className={styles.contact_card}>
      <FontAwesomeIcon icon={icon} className={styles.contact_card__icon} />
      <span className={styles.contact_card__role}>{role}</span>
      <span className={styles.contact_card__name}>{name}</span>
      <a
        href={`mailto:${email}`}
        className={`${styles.contact_card__email} hoverable`}
      >
        {email}
      </a>
      <a
        href={`tel:${number}`}
        className={`${styles.contact_card__number} hoverable`}
      >
        {number}
      </a>
    </div>
  );
};
