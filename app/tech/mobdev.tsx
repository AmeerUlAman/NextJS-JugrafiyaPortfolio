import styles from './tech.module.css';
import React from 'react';
import Card from './card';

const expertiseData = [
  { title: 'React', image: 'ae1.png',invert: true },
  { title: 'Next.js', image: 'ae2.png', invert: true },
  { title: 'Django', image: 'ae3.png', invert: true },
  { title: 'Java Springboot', image: 'ae4.png',invert: true },
  { title: 'React Native', image: 'ae5.png',invert: true }
];

const Mobdev = () => {
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
  );
};

export default Mobdev;
