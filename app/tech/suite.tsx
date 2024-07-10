import styles from './tech.module.css';
import React from 'react';
import Card from './card';
const expertiseData = [
    { title: 'AppStudio', image: 'le1.png' ,invert: true},
    { title: 'Operational Dashboard', image: 'le2.png',invert: true },
    { title: 'Experience Builder', image: 'le3.png' ,invert: true},
    { title: 'Field Maps', image: 'le4.png' ,invert: true},
    { title: 'ArcGIS Development APIs', image: 'le5.png',invert: true },
    { title: 'QuickCapture', image: 'le6.png',invert: true },
    { title: 'ArcGIS StoryMaps', image: 'le7.png',invert: true },
    { title: 'Survey123', image: 'le8.png',invert: true },
    { title: 'Workforce', image: 'le9.png',invert: true }
    ];
    

const Suite = () => {
  return (
    <div>
    <div className={styles.container}>
      <div className={styles.cards}>
        {expertiseData.map((Tech, index) => (
          <Card key={index} title={Tech.title} image={Tech.image} invert={Tech.invert} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Suite
