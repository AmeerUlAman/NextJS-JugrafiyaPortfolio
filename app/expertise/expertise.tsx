// app/expertise/expertise.tsx
import React from 'react';
import Card from './cards';
import styles from './expertise.module.css';

const Expertise = () => {
  const cardsData = [
    {
      title: 'Web GIS Development',
      content: 'GIS web development combines GIS with web technologies to create interactive maps and data visualizations.',
      bgColor: '#ffffff',
      image: '/ex1.jpg',
    },
    {
      title: 'GIS Consultancy',
      content: 'We provide expert guidance and support for clients in leveraging GIS technology for their business needs.',
      bgColor: '#ffffff',
      image: '/ex2.jpg',
    },
    {
      title: 'Mobile GIS App Development',
      content: 'We create such apps that allow users to access and analyze geographic data on mobile devices.',
      bgColor: '#ffffff',
      image: '/ex3.jpg',
      },
    {
      title: 'Automation',
      content: 'We provide cutting-edge automation solutions that improve efficiency and productivity in a variety of industries.',
      bgColor: '#ffffff',
      image: '/ex4.jpg',
     },
    {
      title: 'GIS Analysis',
      content: 'We offers comprehensive GIS analysis services to help clients gain insights and make informed decisions about spatial data',
      bgColor: '#ffffff',
      image: '/ex5.jpg',
    },
    { title: 'Integrations',
      content: 'We provide expert integration services to help clients seamlessly integrate GIS technology with their existing systems and workflows.',
      bgColor: '#ffffff',
      image: '/ex6.jpg',
    },
    { title: 'Database Design',
      content: 'We offer professional database design services to help clients create efficient and scalable data management solutions',
      bgColor: '#ffffff',
      image: '/ex7.jpg',
    },
    {title: 'Remote Sensing',
      content: "We provide advanced remote sensing solutions for clients to gather and analyze data about the Earth's surface from afar.",
      bgColor: '#ffffff',
      image: '/ex8.jpg',
    }
  ];

  return (
    <>
      <div className={styles.dif}></div>
      <div className={styles.blacked}>
 
         <center><div className={styles.Text}>Our Expertise</div></center>
        <center><p>We strive to provide our customers with unparalleled service and exceed their expectations with our exceptional solutions</p></center>
        <div className={styles.cardsContainer} >
          <div className={styles.container}>
            {cardsData.map((card, index) => (
              <Card 
                key={index}
                title={card.title}
                content={card.content}
                bgColor={card.bgColor}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </div>
    
    </>
  );
  }

export default Expertise
