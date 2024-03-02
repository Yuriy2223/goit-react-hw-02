import styles from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <div className={styles.notification}>
      <p className={styles.textMessage}>{message}</p>
    </div>
  );
};

export default Notification;
