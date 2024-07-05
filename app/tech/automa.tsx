import styles from './tech.module.css';
import React from 'react';
import Card from './card';
const expertiseData = [
    { title: 'FME', image: 'ge1.png' },
    { title: 'Python', image: 'ge2.png' },
    { title: 'Selenium', image: 'ge3.png' }
];

const Automa = () => {
  return (
    <div>
    <div className={styles.container}>
 
  <div className={styles.cards}>
    {expertiseData.map((Tech, index) => (
      <Card key={index} title={Tech.title} image={Tech.image} />
    ))}
  </div>

</div>
</div>
  )
}

export default Automa
