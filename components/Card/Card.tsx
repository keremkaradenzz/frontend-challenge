import React from "react";
import styles from "../../styles/Card.module.css";

const Card = ({ message }: { message: string }) => {
  const filter: string[] = ["Movies", "Series", "Titles"];
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.rect} />
        <div className={styles.title}>{message}</div>
      </div>
      <p className={styles.description}>
        {filter.includes(message) ? `Populer ${message}` : message}
      </p>
    </div>
  );
};

export default Card;
