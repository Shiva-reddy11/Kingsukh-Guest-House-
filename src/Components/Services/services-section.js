import React, { useEffect } from 'react'
import './service-section.css'
import serimg from '../../Assets/palash.webp'
import checkmark from '../../Assets/check.png'
import Aos from 'aos'

const ServicesSection = () => {

  useEffect (() =>{
    Aos.init({ duration:2000});
 
   },[]);

  return (
    <section className='service-section' id='service'>
   
     <div className='servimg' >

     <div className='services-box'>
        <div data-aos="zoom-in">
      <p className='services-title'>SERVICES</p>
      <div className='services-hr'></div>
      <h1>Strive Only For The Best.</h1>
      </div>
      <div>
        <div data-aos="fade-right" data-aos-duration="1000" className='services-items'>
        <img src={checkmark} height={20}/>
        <p>High Class Security</p>
        </div>
        <div data-aos="fade-right" data-aos-duration="1500" className='services-items'>
        <img src={checkmark} height={20}/>
        <p>24 Hours Room Service</p>
        </div>
        <div data-aos="fade-right" data-aos-duration="2000" className='services-items'>
        <img src={checkmark} height={20}/>
        <p>Restaurant</p>
        </div>
        <div data-aos="fade-right" data-aos-duration="2500" className='services-items'>
        <img src={checkmark} height={20}/>
        <p>Tourist Guide Support</p>
        </div>
        </div>
     </div>

     </div>
    </section>
  )
}

export default ServicesSection
