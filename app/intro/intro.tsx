"use client";

import styles from './intro.module.css';
import React, { useEffect } from 'react';

const Intro: React.FC = () => {
  useEffect(() => {
    generateStars(50);
  }, []);

  const generateStars = (starCount: number) => {
    const starfield = document.querySelector(`.${styles.starfield}`);
    if (starfield) {
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add(styles.stars);
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starfield.appendChild(star);
      }
    }
  };

  return (
    <>
      <div className={styles.dif}></div>
      <div className={styles.frex}>
        <div className={styles.introtexta}>
       <center><h1>GIS Solutions & Services</h1></center>   
          <p>Jugrafiya specializes in providing top-tier Web GIS Development services to businesses. Based in Pakistan, our team of highly experienced GIS Engineers specializes in:</p>
          <ul>
            <li>Open-Source GIS Solutions</li>
            <li>Web & Mobile Development</li>
            <li>Complete ArcGIS Suite development</li>
            <li>Automation pipelines</li>
          </ul>
          <button className={styles.but}>Explore</button>
          <button className={styles.but}>Get in touch</button>
        </div>
        <div className={styles.introtext}>
          <div className={styles.starfield}></div> {/* Container for stars */}
          <img src="sat1.png" alt="SATELLITE" />
        </div>
      </div>
    </>
  );
};

export default Intro;
