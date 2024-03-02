import styles from "./styles.module.scss";

interface ResourceTab {
  name: string;
  href: string;
  bgImage: string;
}

export const ResourceTab: React.FC<ResourceTab> = ({ name, bgImage, href }) => {
  return (
    <div
      className={`${styles.resource_tab} ${bgImage}`}
      onClick={() => window.open(href)}
    >
      <span className={`${styles.resource_tab__name} hoverable`}>{name}</span>
    </div>
  );
};
