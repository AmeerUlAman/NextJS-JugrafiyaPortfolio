"use client";

import React, { useEffect, useState } from 'react';
import styles from './card.module.css';
import Image from 'next/image';

interface CardProps {
  title: string;
  image: string;
  invert?: boolean; // Add optional invert prop
}

const Card: React.FC<CardProps> = ({ title, image, invert }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const whole = document.querySelector(`.${styles.whole}`);
      const wholePosition = whole.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (wholePosition < screenPosition) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.whole} ${scrolled ? styles.scrolled : ''}`}>
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
    </div>
  );
};

export default Card;
