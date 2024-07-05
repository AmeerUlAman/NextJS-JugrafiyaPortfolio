import styles from './intro.module.css';
import React from 'react'

const Intro = () => {
  return (
    <>
<div className={styles.dif}></div>
    <div className={styles.frex}>
    <div className={styles.introtext}>
        <h1>GIS Solutions & Services</h1>
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
        <img src="sat1.png" alt="SATELLITE" />
    </div>
    </div>
    
    </>
  )
}

export default Intro
