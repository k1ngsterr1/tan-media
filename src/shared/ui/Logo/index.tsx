import { useNavigate } from "react-router-dom";
import logo from "@assets/TAN_LOGO.svg";

import styles from "./styles.module.scss";

export const Logo = () => {
  const navigate = useNavigate();

  const handleScrollNavigate = () => {
    navigate("/home");
    scrollTo(0, 0);
  };

  return (
    <img src={logo} className={styles.logo} onClick={handleScrollNavigate} />
  );
};
