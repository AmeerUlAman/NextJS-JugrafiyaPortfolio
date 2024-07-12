import styles from './tech.module.css';
import React from 'react';
import Card from './card';
import Gissol from './gissol';
import Mobdev from './mobdev';
import Suite from './suite';
import Automa from './automa';  

const Tech = () => {
  return (<div className={styles.blacked}>
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
  )
}

export default Tech
