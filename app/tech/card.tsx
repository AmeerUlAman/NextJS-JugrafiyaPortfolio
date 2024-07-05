import React from 'react';
import styles from './card.module.css';

interface CardProps {
  title: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <p className={styles.cardTitle}>{title}</p>
    </div>
  );
};

export default Card;