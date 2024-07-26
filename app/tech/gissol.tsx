import styles from './tech.module.css';
import React from 'react';
import Card from './card';
const expertiseData = [
    { title: 'Geoserver', image: '/te1.png',invert: true  },
    { title: 'Leaflet', image: '/te2.png',invert: true  },
    { title: 'Mapbox', image: '/te3.png',invert: true  },
    { title: 'OpenLayers', image: '/te4.png',invert: true  }
     ];

const Gissol = () => {
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

export default Gissol
