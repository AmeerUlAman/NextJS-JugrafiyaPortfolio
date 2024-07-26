"use client";

import React from 'react';
import styles from './cards.module.css';

interface CardProps {
  title: string;
  content: string; 
  image: string;
}

const Card: React.FC<CardProps> = ({ title, content,  image }) => {
  return (
    <div className={styles.card}  >
      <img src={image} alt={title} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardContent}>{content}</p>
    </div>
  );
};

export default Card;