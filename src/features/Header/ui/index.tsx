import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { Logo } from "@shared/ui/Logo";
import { Button } from "@shared/ui/Button";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.header__nav}>
        <Link to="/home" className={styles.header__nav__link}>
          Главная
        </Link>
        <Link to="/holding" className={styles.header__nav__link}>
          О холдинге
        </Link>
        <Link to="/resources" className={styles.header__nav__link}>
          Ресурсы
        </Link>
        <Link to="/contacts" className={styles.header__nav__link}>
          Контакты
        </Link>
        <Link to="/mediacafe" className={styles.header__nav__link}>
          Mediacafe
        </Link>
      </nav>
    </header>
  );
};
