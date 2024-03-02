import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";

import Baitasov from "@assets/armanzhan.png";

export const OwnerScreen = () => {
  return (
    <section className="container">
      <div className="flex items-start justify-between mt-20">
        <div className="flex flex-col items-start">
          <Fade cascade damping={0.3}>
            <h2 className="heading orange_gradient !w-full">
              ОСНОВАТЕЛЬ ХОЛДИНГА
            </h2>
            <span className={styles.name}>Арманжан Байтасов</span>
            <span className={styles.small_text}>Владелец Tan Media Group</span>

            <p className="paragraph w-[70%] mt-4">
              Издатель журнала "Forbes Kazakstan", Председатель совета
              директоров Tan Media Group, член Национального совета
              общественного доверия при Президенте РК, член совета директоров АО
              «НК «QazExpoCongress», член совета директоров АО «Казахфильм» им.
              Шакена Айманова», учредитель Казахстанского МедиаАльянса, член
              попечительского совета общественно-социального фонда "Казакстан
              Халкына", член попечительского совета Фонда Булата Утемуратова,
              член YPO Kazakhstan, член совета директоров КазНУ им. Аль-Фараби,
              сооснователь образовательного проекта IQanat.
            </p>
          </Fade>
        </div>
        <img className={styles.photo} src={Baitasov} alt="Armanzhan Baitasov" />
      </div>
    </section>
  );
};
