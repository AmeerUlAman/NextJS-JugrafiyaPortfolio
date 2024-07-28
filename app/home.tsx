import Image from 'next/image';
import Link from 'next/link' ;
import Nav from './nav/nav';
import Intro from './intro/intro';
import Expertise from './expertise/expertise';
import Tech from './tech/tech';
import Stats from './stats/stats';
import Domains from './domains/domains';
import Testim from './testimonial/testim'; 
import Foot from './foot/foot';
import Hero from './hero/hero';



export default function Home() {
  return (
    <>

    <Nav/>
     
    <div className='centred'>    <main>
      
     </main>
  
       </div>
          <main>
            <div className='back'>
<Hero/>
                
                
                    
                   <Expertise/> 
                 <Tech/><Stats/> 
            </div>
  
   
   
    
      <Domains/> 
      <Testim/>
      <Foot/>
       </main>

       <main>
 

</main>

    </>
     );
}
 