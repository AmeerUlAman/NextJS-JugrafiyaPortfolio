"use client";

import React, { useEffect, useState } from 'react';

import styles from './tech.module.css';
import Card from './card';
import Gissol from './gissol';
import Mobdev from './mobdev';
import Suite from './suite';
import Automa from './automa';  

const Tech = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const whole = document.querySelector(`.${styles.whole}`);
      const wholePosition = whole.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (wholePosition < screenPosition) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.whole} ${scrolled ? styles.scrolled : ''}`}>
  <div className={styles.blacked}>
    <div>
    <center><h1 className={styles.Text}>Technologies We love</h1></center>  
    <div className={styles.hrtext}>OpenSource GIS solutions</div>
    
  <Gissol/>
  <div className={styles.hrtext}>Web & Mobile Application Developement</div>
 
<Mobdev/>
<div className={styles.hrtext}>ArcGIS Suite</div>
 
<Suite/>
<div className={styles.hrtext}>Automation</div>
 
<Automa/>
    </div>
    </div>
    </div>
  )
}

export default Tech
