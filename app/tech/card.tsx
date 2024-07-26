import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';

interface CardProps {
  title: string;
  image: string;
  invert?: boolean; // Add optional invert prop
}

const Card: React.FC<CardProps> = ({ title, image, invert }) => {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={title}
        width={500} // Provide a suitable width
        height={300}
        quality={100} 
        className={`${styles.cardImage} ${invert ? styles.invertColor : ''}`}
      />
      <p className={styles.cardTitle}>{title}</p>
    </div>
  );
};

export default Card;
