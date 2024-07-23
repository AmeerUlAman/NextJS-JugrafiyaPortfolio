import React from 'react'
import styles from './cards.module.css';

interface cardProps{
heading:string;
numbs:string;
im:string;
}


const Cards :React.FC<cardProps>= ({heading,numbs,im}) => {
  return (
    <div>
  <center> <img src={im} alt={im} className={styles.inv}/></center>   
 <p className={styles.hea}>{heading}</p>
 <p className={styles.cent}>{numbs}</p>
    </div>
  )
}

export default Cards
