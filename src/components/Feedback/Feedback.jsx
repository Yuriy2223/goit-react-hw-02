import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.listFeedback}>
      <li>
        <p className={styles.textFeedback}>Good: {good}</p>
      </li>
      <li>
        <p className={styles.textFeedback}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={styles.textFeedback}>Bad: {bad}</p>
      </li>
      <li>
        <p className={styles.textFeedback}>Total: {total}</p>
      </li>
      <li>
        <p className={styles.textFeedback}>
          Positive feedback: {positivePercentage.toFixed(2)}%
        </p>
      </li>
    </ul>
  );
};

export default Feedback;
