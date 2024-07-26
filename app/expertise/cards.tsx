"use client";

import React from 'react';
import styles from './cards.module.css';
import Image from 'next/image';
interface CardProps {
  title: string;
  content: string; 
  image: string;
}

const Card: React.FC<CardProps> = ({ title, content,  image }) => {
  return (
    <div className={styles.card} >
      <Image      src={image}
          alt={title}
          layout="responsive"
          width={500} // Provide a suitable width
          height={300} // Provide a suitable height
          quality={100} // Set the quality to 100 (higher quality)
          className={styles.cardImage}
        
          />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardContent}>{content}</p>
    </div>
  );
};

export default Card;