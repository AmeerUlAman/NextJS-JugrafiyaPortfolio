import Image from 'next/image';
import Link from 'next/link' ;
import Nav from './nav/nav';
import Intro from './intro/intro';
import Expertise from './expertise/expertise';
import Tech from './tech/tech';
import Stats from './stats/stats';
export default function Home() {
  return (
    <>

    <Nav/>
     
    <div className='centred'>    <main>
      <Intro/>
     </main>
  
       </div>
          <main>
      <Expertise/> 
      <Tech/>
      <Stats/> 
       </main>

       <main>
<div  className='bg'> 
  
  
   </div>

</main>

    </>
     );
}
 