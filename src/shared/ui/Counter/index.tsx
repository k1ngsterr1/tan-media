import CountUp from "react-countup";
import styles from "./styles.module.scss";

interface CounterProps {
  end: number;
  text: string;
}

export const Counter: React.FC<CounterProps> = ({ end, text }) => {
  return (
    <div className={styles.counter}>
      <CountUp end={end} duration={2} className={styles.counter__number} />
      <p className="paragraph mt-2">{text}</p>
    </div>
  );
};
