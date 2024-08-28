import React, { useEffect, useState } from 'react'
import './count.css'
import CountUp from 'react-countup/build'
import ScrollTrigger from 'react-scroll-trigger';
import Aos from 'aos';

const Count = () => {
  const [counterOn , setCounterOn]=useState(false);
  
  useEffect (() =>{
   Aos.init({ duration:2000});

  },[]);
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <section className='count-section ' data-aos="fade-up">
       <p >
          <span className='count-num'>
                {counterOn && <CountUp start={0} end={150} duration={2} delay={0}/>} 
                     <span  className='count-pluse'>+</span> 
                          </span>
                             <br></br> Bookings
                                </p>
       <p > 
          <span className='count-num'>
             {counterOn && <CountUp start={0} end={3500} duration={2} delay={0}/>} 
                <span className='count-pluse'>+</span> 
                     </span>
                         <br></br> Customers
                             </p>

    </section>
    </ScrollTrigger>
  )
}

export default Count
