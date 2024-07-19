import React from 'react';
import styles from './contact.module.css';
import Nav from '../nav/nav';
import Foot from '../foot/foot';
const Contact = () => {
  return (
    <div>
      <Nav/>
<center><h1>Contact Us</h1></center>
<div >
<form action="" className={styles.cent}>
<div  className={styles.box}>
  <label >Username:</label><br />
    <input type="text" name="username" id="username" placeholder='Enter your Name here' className={styles.bor}/>
</div>
<div  className={styles.box}>
  <label >Email:</label><br />
    <input type="text" name="email" id="email" placeholder='Enter your E-mail here' className={styles.bor}/>
</div>
<div  className={styles.box}>
  <label >Company:</label><br />
    <input type="text" name="company" id="company" placeholder='Enter your Company here' className={styles.bor} />
</div>
<div  className={styles.box}>
  <label >Phone:</label><br />
    <input type="text" name="phone" id="phone" placeholder='Enter your Phone here' className={styles.bor}/>
 
</div>
<div className={styles.mg}>
  <label>Your Message here:</label><br />
<textarea id="message" name="message" rows="4" cols="50" placeholder='Enter your Message here.....' className={styles.mgbox}/>
</div>
<div className={styles.but1}>
  <button type="submit"  className={styles.but}> Submit</button>
</div>
</form>
</div>
 
    </div>
  )
}

export default Contact
