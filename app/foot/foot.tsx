import React from 'react';
import styles from './foot.module.css';

const Foot = () => {
  return (
    <>
      <div className={styles.bg}>
        <center><h1 className={styles.cu}>CONTACT US</h1></center>
        <div className={styles.m1}>
          <div className={styles.info}>
            <div className={styles.m}><img src="./email.png" alt="" /><p>muhammad.tayyab@jugrafiya.com</p></div>
            <div className={styles.m}>
              <a href="https://www.linkedin.com/in/muhammad-tayyab-mir-8a180968/"><img src="./linkedin.png" alt="" /></a>
              <a href="https://github.com/TayyabMir056"><img src="./github.png" alt="" /></a>
              <p>Muhammed Tayyab</p>
            </div>
            <div className={styles.m}><img src="./office.png" alt="" /><p>Jugrafiya Office#1206 , Alpha Techno Square, NASTP, Chaklala Cantt, Rawalpindi, Pakistan</p></div>
            <div className={styles.m}><img src="./phone.png" alt="" /><p>+92-336-5829922</p></div>
          </div>
          <div className={styles.for}>
            <form action="./send_email.php" method="post">
              <label htmlFor="name">Name:</label><br />
              <input type="text" id="name" name="name" required /><br /><br />

              <label htmlFor="email">Email:</label><br />
              <input type="email" id="email" name="email" required /><br /><br />

              <label htmlFor="message">Message:</label><br />
              <textarea id="message" name="message" rows="4" cols="50" required></textarea><br /><br />

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foot;

