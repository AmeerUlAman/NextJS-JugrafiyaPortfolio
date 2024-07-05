import styles from './tech.module.css';
import React from 'react';
import Card from './card';
const expertiseData = [
    { title: 'AppStudio', image: 'le1.png' },
    { title: 'Operational Dashboard', image: 'le2.png' },
    { title: 'Experience Builder', image: 'le3.png' },
    { title: 'Field Maps', image: 'le4.png' },
    { title: 'ArcGIS Development APIs', image: 'le5.png' },
    { title: 'QuickCapture', image: 'le6.png' },
    { title: 'ArcGIS StoryMaps', image: 'le7.png' },
    { title: 'Survey123', image: 'le8.png' },
    { title: 'Workforce', image: 'le9.png' }
    ];
    

const Suite = () => {
  return (
    <div>
      
    <div>
        <div className={styles.container}>
     
      <div className={styles.cards}>
        {expertiseData.map((Tech, index) => (
          <Card key={index} title={Tech.title} image={Tech.image} />
        ))}
      </div>

    </div>
    </div>
    </div>
  )
}

export default Suite
