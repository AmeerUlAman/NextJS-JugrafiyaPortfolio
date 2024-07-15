import React from 'react';
import styles from './cards.module.css';

interface cardsD{
image: string;
head: string;
det: string;
}

const Cards:React.FC<cardsD> = ({image,head,det}) => {
  return (
    <div className={styles.cardz}>
      <img src={image}  alt="N/A" />
      <p className={styles.hea}>{head}</p>
      <p className={styles.de}>{det}</p>

    </div>
  )
}

export default Cards
