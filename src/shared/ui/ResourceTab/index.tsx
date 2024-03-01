import styles from "./styles.module.scss";

interface ResourceTab {
  name: string;
  bgImage: string;
}

export const ResourceTab: React.FC<ResourceTab> = ({ name, bgImage }) => {
  return (
    <div className={`${styles.resource_tab} ${bgImage}`}>
      <span className={`${styles.resource_tab__name} hoverable`}>{name}</span>
    </div>
  );
};
