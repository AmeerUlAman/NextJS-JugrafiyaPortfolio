import React from 'react';
import styles from './card.module.css';

interface CardProps {
  title: string;
  image: string;
  invert?: boolean; // Add optional invert prop
}

const Card: React.FC<CardProps> = ({ title, image, invert }) => {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={title}
        className={`${styles.cardImage} ${invert ? styles.invertColor : ''}`}
      />
      <p className={styles.cardTitle}>{title}</p>
    </div>
  );
};

export default Card;
