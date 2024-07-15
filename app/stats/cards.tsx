import React from 'react'
import styles from './cards.module.css';

interface cardProps{
heading:string;
numbs:string;

}


const Cards :React.FC<cardProps>= ({heading,numbs}) => {
  return (
    <div>
 <p className={styles.hea}>{heading}</p>
 <p className={styles.cent}>{numbs}</p>
    </div>
  )
}

export default Cards
