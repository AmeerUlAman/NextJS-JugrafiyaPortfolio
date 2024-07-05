import styles from './tech.module.css';
import React from 'react';
import Card from './card';
import Gissol from './gissol';
import Mobdev from './mobdev';
import Suite from './suite';
import Automa from './automa';  

const Tech = () => {
  return (
    <div>
    <center><h1 className={styles.Text}>Technologies We love</h1></center>  
    <h3>OpenSource GIS solutions</h3>
    <hr />
  <Gissol/>
  <h3>Web & Mobile Application Developement</h3>
  <hr />
<Mobdev/>
<h3>ArcGIS Suite</h3>
  <hr />
<Suite/>
<h3>Automation</h3>
  <hr />
<Automa/>
<div className={styles.gp}></div>
    </div>
  )
}

export default Tech
