import React from 'react';
import styles from './domains.module.css';
import Cards from './cards';



const Domains = () => {
const Carddata =[
 {image:"/d1.jpg",
    head:"Utilities (Electricity)",
    det:"Manage your electricity networks, streamline asset management, and analyze energy distribution with ease."},
{image:"/d2.jpg",
    head:"Real Estate",
    det:"Visualize and analyze property data, make informed decisions on property development, site selection, and market analysis."},
{image:"/d3.jpg",
    head:"Oil & Gas",
    det:"Track assets, assess risks, manage pipelines and visualize data to optimize your operations."},
{image:"/d4.jpg",
    head:"Tourism",
    det:"Enhance the visitor experience, and plan your tourism marketing with interactive maps and location-based services."},
{image:"/d5.jpg",
    head:"Telecom",
    det:"Optimize your network planning, site selection, and asset management for your telecom business. Analyze market trends and customer behavior with ease."},
{image:"/d6.jpg",
    head:"Agriculture",
    det:"Optimize crop management, yield and soil analysis, land use planning, and resource management."}

    
];



  return (<div className={styles.mar}>
   <div className={styles.hea}>

<h1>Expertise accross various domains</h1>
<p>We have experience in empowering businesses with innovative solutions in diverse domains</p>
    </div>

<div className={styles.container}>

   
   {Carddata.map((card,index)=>(   
<Cards 
key = {index}
image={card.image}
head ={card.head}
det = {card.det}
/> 
   ))}

</div>
</div> )
}



export default Domains
