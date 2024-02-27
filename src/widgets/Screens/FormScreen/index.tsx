import { Form } from "@widgets/Form/ui";

import bg from "@assets/bg.png";
import styles from "./styles.module.scss";

export const FormScreen = () => {
  return (
    <section className="container relative flex items-center" id="contacts">
      <h2 className={styles.heading}>Связаться с нами</h2>
      <p className="paragraph w-[50%] text-center mt-4 mb-8">
        TAN MEDIA GROUP - крупнейший медиахолдинг в Казахстане. Несколько
        масштабных медиаресурсов и безграничное количество возможностей, чтобы
        давать нашей аудитории и партнёрам актуальную информацию, качественный
        контент и возможности для плодотворного сотрудничества.
      </p>
      <Form />
      <div className={styles.contacts}>
        <span className={styles.contacts__text}>Директор отдела продаж</span>
        <span className={styles.contacts__name}>Галия Габдуллина</span>
        <a
          className={`${styles.contacts__link} hoverable`}
          href="tel:+77071475150"
        >
          +7 707 147 51 50
        </a>
        <a
          className={`${styles.contacts__link} hoverable`}
          href="mailto:galiya@umaa.kz"
        >
          galiya@umaa.kz
        </a>
      </div>
      <img src={bg} className={styles.bg} alt="background" />
    </section>
  );
};
