import React from 'react';
import styles from './cards.module.css';

interface cardsD{
image: string;
head: string;
det: string;
reverse:boolean;
}

const Cards:React.FC<cardsD> = ({image,head,det,reverse}) => {
  return (
    <div className={`${styles.cardz} ${reverse ? styles.reverse : ''}`}>
      <img src={image}  alt="N/A" />
      <p className={styles.hea}>{head}</p>
      <p className={styles.de}>{det}</p>

    </div>
  )
}

export default Cards
