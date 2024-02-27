import React from "react";
import bg from "@assets/bg.webp";

import styles from "./styles.module.scss";
import { Form } from "@widgets/Form/ui";

export const FormScreen = () => {
  return (
    <section className="container flex items-center" id="contacts">
      <h2 className={styles.heading}>Связаться с нами</h2>
      <p className="paragraph w-[50%] text-center mt-4 mb-8">
        TAN MEDIA GROUP - крупнейший медиахолдинг в Казахстане. Несколько
        масштабных медиаресурсов и безграничное количество возможностей, чтобы
        давать нашей аудитории и партнёрам актуальную информацию, качественный
        контент и возможности для плодотворного сотрудничества.
      </p>
      <Form />
      <img src={bg} className={styles.bg} alt="background" />
    </section>
  );
};
