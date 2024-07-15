// components/Testimonial.tsx

import React from 'react';
import styles from './testimonial.module.css';

interface TestimonialProps {
  text: string;
  author: string;
  company: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author, company, image }) => {
  return (

           <div className={styles.testimonial}>
    
    <div className={styles.sec}>    
     
      <p className={styles.testimonialtext}>{text}</p>
      </div>
     
    <div className={styles.third}><div className={styles.frex}>
        <div>
          <p className={styles.testimonialauthor}>{author}</p>
          {company && <p className={styles.testimonialposition}>{company}</p>}
        </div>
        <div>
          <img src={image} alt="Profile" className={styles.pfp} />
        </div>
      </div>
      </div>

    </div>
    
     
  

  );
};

export default Testimonial;
