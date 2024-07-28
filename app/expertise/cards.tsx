"use client";

import { useEffect, useRef } from 'react';
import styles from './cards.module.css';
import Image from 'next/image';

interface CardProps {
  title: string;
  content: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, content, image }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const cardElement = cardRef.current;
      if (cardElement) {
        const rect = cardElement.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          cardElement.classList.add(styles.scrolled);
        } else {
          cardElement.classList.remove(styles.scrolled);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
     
      <div className={styles.card}>
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={0} // Provide a suitable width
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
