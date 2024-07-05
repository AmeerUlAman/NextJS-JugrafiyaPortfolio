import styles from './tech.module.css';
import React from 'react';
import Card from './card';
const expertiseData = [
{ title: 'React', image: 'ae1.png' },
{ title: 'Next.js', image: 'ae2.png' },
{ title: 'Django', image: 'ae3.png' },
{ title: 'Java Springboot', image: 'ae4.png' },
{ title: 'React Native', image: 'ae5.png' }
];


const Mobdev = () => {
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

export default Mobdev
