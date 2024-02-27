import { Input } from "@shared/ui/Input";
import { Button } from "@shared/ui/Button";

import styles from "./styles.module.scss";

export const Form = () => {
  return (
    <form className={styles.form}>
      <Input labelText="Ваше имя" type="text" margin="mt-2" />
      <Input labelText="Компания" type="text" margin="mt-8" />
      <Input labelText="Должность" type="text" margin="mt-8" />
      <Input labelText="Ваш e-mail" type="email" margin="mt-8" />
      <Input labelText="Ваш телефон" type="phone" margin="mt-8" />
      <Button text="Отправить" buttonType="filled" margin="mt-8" />
    </form>
  );
};
