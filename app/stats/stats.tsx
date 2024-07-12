import React from 'react'
import styles from './stats.module.css';
import Cards from './cards';


const Stats = () => {
const cardData = [{heading:"Project Completed",numbs:"400+"},
                  {heading:"5 Star Ratings",numbs:"300+"},
                  {heading:"No of clients",numbs:"350+"},
                  {heading:"No of Countries",numbs:"25+"}
                ];

  return (
    <div className={styles.blued}>
      {cardData.map((cards,index)=>(
       <Cards
       heading={cards.heading}
       numbs={cards.numbs}
       />
      )


      )}


    </div>
  )
}

export default Stats
