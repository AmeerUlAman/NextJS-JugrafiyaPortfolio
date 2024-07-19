import React from 'react';
import styles from './foot.module.css';

const Foot = () => {
  return (
    <>
      <div className={styles.bg}>
        
        <div className={styles.m1}>
          <div className={styles.info}> 
            <center>  <h1 className={styles.cu}>CONTACT US</h1> </center>
          
            <div className={styles.m}><img src="./email.png" alt="" /><p>muhammad.tayyab@jugrafiya.com</p></div>
            <div className={styles.m}>
              <a href="https://www.linkedin.com/in/muhammad-tayyab-mir-8a180968/"><img src="./linkedin.png" alt="" /></a>
            
              <p>Muhammed Tayyab</p>  <a href="https://github.com/TayyabMir056"><img src="./github.png" alt="" /></a>
            </div>
            <div className={styles.m}><img src="./office.png" alt="" /><p>Jugrafiya Office#1206 , Alpha Techno Square, NASTP, Chaklala Cantt, Rawalpindi, Pakistan</p></div>
            <div className={styles.m}><img src="./phone.png" alt="" /><p>+92-336-5829922</p></div>
          </div>
          <div className={styles.for}>
            {/* <form action="./send_email.php" method="post">
              <label htmlFor="name">Name:</label><br />
              <input type="text" id="name" name="name" required /><br /><br />

              <label htmlFor="email">Email:</label><br />
              <input type="email" id="email" name="email" required /><br /><br />

              <label htmlFor="message">Message:</label><br />
              <textarea id="message" name="message" rows="4" cols="50" required></textarea><br /><br />

              <input type="submit" value="Submit" />
            </form> */}
<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.767220636146!2d73.09924044805601!3d33.6067746023683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb5af351390b%3A0xbef30886a40055ac!2sMain%20Terminal%20Complex%2C%20Chaklala%20Cantt.%2C%20Rawalpindi%2C%20Punjab%2046000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721406105721!5m2!1sen!2s"
        width="700"
        height="300"
        style={{ border: 0, borderRadius: '14px'}} 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foot;

