import { Input } from "@shared/ui/Input";
import styles from "./styles.module.scss";

export const Form = () => {
  return (
    <form className={styles.form}>
      <Input labelText="Ваше имя" type="text" />
      <Input labelText="Компания" type="text" margin="mt-4" />
      <Input labelText="Должность" type="text" margin="mt-4" />
      <Input labelText="Ваш e-mail" type="email" margin="mt-4" />
      <Input labelText="Ваш телефон" type="phone" margin="mt-4" />
    </form>
  );
};
