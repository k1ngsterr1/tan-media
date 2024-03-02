import { Link } from "react-router-dom";
import { Logo } from "@shared/ui/Logo";
import { SocialButton } from "@shared/ui/SocialButton";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Logo />
        <nav className={styles.footer__container__nav}>
          <Link
            to="/home"
            className={`${styles.footer__container__nav__link} hoverable`}
          >
            Главная
          </Link>
          <Link
            to="/holding"
            className={`${styles.footer__container__nav__link} hoverable`}
          >
            О холдинге
          </Link>
          <Link
            to="/resources"
            className={`${styles.footer__container__nav__link} hoverable`}
          >
            Ресурсы
          </Link>
          <Link
            to="/contacts"
            className={`${styles.footer__container__nav__link} hoverable`}
          >
            Контакты
          </Link>
          <Link
            to="/mediacafe"
            className={`${styles.footer__container__nav__link} hoverable`}
          >
            Mediacafe
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <SocialButton icon={faInstagram} onClick={() => console.log("aaa")} />
          <SocialButton icon={faWhatsapp} onClick={() => console.log("aaa")} />
        </div>
      </div>
    </footer>
  );
};
