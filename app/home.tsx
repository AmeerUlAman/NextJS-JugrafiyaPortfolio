import Image from 'next/image';
import Link from 'next/link' ;
import Nav from './nav/nav';
import Intro from './intro/intro';
import Expertise from './expertise/expertise';
import Tech from './tech/tech';
export default function Home() {
  return (
    <>

    <Nav/>
    <hr className='fade-hr'/>
    <div className='centred'>    <main>
      <Intro/>
      <hr className='fade-hr'/>
      <Expertise/>
      <hr className='fade-hr'/>
      <Tech/>
      <hr className='fade-hr'/>
       </main>

       </div>
       <main>
<div  className='bg'>  </div>

</main>

    </>
     );
}
 