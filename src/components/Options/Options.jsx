import styles from "./Options.module.css";

const Options = ({ handleFeedback, totalFeedback }) => {
  return (
    <ul className={styles.optionsList}>
      <li className={styles.item}>
        <button className={styles.btn} onClick={() => handleFeedback("good")}>
          Good
        </button>
      </li>
      <li className={styles.item}>
        <button
          className={styles.btn}
          onClick={() => handleFeedback("neutral")}
        >
          Neutral
        </button>
      </li>
      <li className={styles.item}>
        <button className={styles.btn} onClick={() => handleFeedback("bad")}>
          Bad
        </button>
      </li>
      {totalFeedback > 0 && (
        <li className={styles.item}>
          <button
            className={styles.btn}
            onClick={() => handleFeedback("reset")}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
