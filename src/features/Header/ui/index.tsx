import { Link } from "react-router-dom";
import { Logo } from "@shared/ui/Logo";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.header__nav}>
        <Link to="/home" className={`${styles.header__nav__link} hoverable`}>
          Главная
        </Link>
        <Link to="/holding" className={`${styles.header__nav__link} hoverable`}>
          О холдинге
        </Link>
        <Link
          to="/resources"
          className={`${styles.header__nav__link} hoverable`}
        >
          Ресурсы
        </Link>
        <Link
          to="/contacts"
          className={`${styles.header__nav__link} hoverable`}
        >
          Контакты
        </Link>
        <Link
          to="/mediacafe"
          className={`${styles.header__nav__link} hoverable`}
        >
          Mediacafe
        </Link>
      </nav>
    </header>
  );
};
