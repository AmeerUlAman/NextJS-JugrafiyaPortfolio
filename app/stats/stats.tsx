import React from 'react'
import styles from './stats.module.css';
import Cards from './cards';


const Stats = () => {
const cardData = [{im:'./project.png',heading:"Project Completed",numbs:"400+"},
                  {im:'./star.png',heading:"5 Star Ratings",numbs:"300+"},
                  {im:'./client.png',heading:"No of clients",numbs:"350+"},
                  {im:'./global.png',heading:"No of Countries",numbs:"25+"}
                ];

  return (
 
    
    <div className={styles.blued}>

<h1 className={styles.ce}>The Stats</h1>
      <div className={styles.frex}>
      {cardData.map((cards,index)=>(
       <Cards 
       im={cards.im}
       heading={cards.heading}
       numbs={cards.numbs}
       />
     
      )


      )}
</div>

    </div>
 
  )
}

export default Stats
