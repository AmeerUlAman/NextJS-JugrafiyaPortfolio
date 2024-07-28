"use client";

// components/Testim.tsx

import React, { useState, useEffect } from 'react';
import Testimonial from './testimonial';
import styles from './tesim.module.css';
interface TestimonialData {
  text: string;
  author: string;
  company: string;
  image: string;
}

const testimonials: TestimonialData[] = [
  {
    text: '"We are a GIS technology company working in real estate in East Africa. When we began product development, our biggest challenge was building a team skilled in both software development, geospatial systems and one that had experience working in Real Estate. Jugrafiya happened to be the perfect match. They understood our vision to empower property investors with information through the digitization of the property buying process. Their approach is pleasantly different from other developers and there is a sense of bonfide job satisfaction. Jugrafiya has been part of the creative process of AerialGIS from ideation to execution and have assisted to build products that are used widely in the regional real estate sector. We are excited to continue our relationship with them."',
    author: "Nancy Wachiura",
    company: "ArielGIS",
    image: "/t1.jpeg",
  },
  {
    text: '"I approached Jugrafiya to help design a website for me, and I was very impressed by their level of professionalism. They took their time to understand my requirements and delivered on time. They were very open and accommodating to having further feedback sessions with me, which were very helpful to help refine and update the website. Nothing was ever too much to ask, and they were very easy to work with. Jugrafiya has been a pleasure to work with, and I’m very happy with the end product. They are approachable, resourceful, enthusiastic, and very good at what they do. I look forward to working with Jugrafiya in the future. I highly recommend Jugrafiya to anyone."',
    author: "Jojo Koomson",
    company: "Gemceak LTD",
    image: "/t2.jpeg",
  },
  // Add more testimonials as needed
];

const Testim: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change interval (in milliseconds) as needed

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className={styles.sty}>
        <center className={styles.hea}><h1>Testimonials</h1></center>
  


      <div style={{ textAlign: 'center', display: 'flex', justifyContent:'stretch'
 }} >
        <button onClick={prevSlide}> </button>
        <Testimonial
          text={testimonials[currentIndex].text}
          author={testimonials[currentIndex].author}
          company={testimonials[currentIndex].company}
          image={testimonials[currentIndex].image}
        />
        <button onClick={nextSlide}> </button>
      </div>
    </div>
  );
};

export default Testim;
