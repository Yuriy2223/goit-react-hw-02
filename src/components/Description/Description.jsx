import styles from "./Description.module.css";
import description from "../data/descriptions.json";

const Description = () => {
  return (
    <div className={styles.descriptionContainer}>
      <h1 className={styles.title}>{description.title}</h1>
      <p className={styles.text}>{description.text}</p>
    </div>
  );
};

export default Description;
