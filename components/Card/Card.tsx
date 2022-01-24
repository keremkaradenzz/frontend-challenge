import React from "react";
import styles from "../../styles/Card.module.css";
import Image from "next/image";

const Card = ({ message, images }: { message: string, images: any }) => {
  const filter: string[] = ["Movies", "Series", "Titles"];
 
  return (
    <div data-test="cardComponent">
      
      <div className={styles.card}>
        {images?.posterArt.url ? <Image unoptimized src={images.posterArt.url} alt={message} layout="fill"/>:
        <>
        <div className={styles.rect} />
        <div className={styles.title}>{message}</div>
        </>
         }
      </div>
      <p className={styles.description} data-test="cardMessage">
        {filter.includes(message) ? `Populer ${message}` : message}
      </p>
    </div>
  );
};

export default Card;
