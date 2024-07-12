import React from 'react'
import styles from './cards.module.css';

interface cardProps{
heading:string;
numbs:string;

}


const Cards :React.FC<cardProps>= ({heading,numbs}) => {
  return (
    <div>
 <h1>{heading}</h1>
 <p className={styles.cent}>{numbs}</p>
    </div>
  )
}

export default Cards
