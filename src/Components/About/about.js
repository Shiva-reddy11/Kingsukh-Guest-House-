import React, { useEffect } from 'react'
import './about.css'
import aboutimg from '../../Assets/large.jpg'
import Button from '../Common/button'
import Aos from 'aos'

const About = () => {
  useEffect (() =>{
    Aos.init({ duration:2000});
 
   },[]);
  return (
    <section className='about-section' id='about'>
      <div className='about-flex'>
        <div>
        <img src={aboutimg} className='about-img'/>
       
        </div>
        <div className='about-data' data-aos="fade-up">
           <div className='about-us'>
            <h2>About Us</h2>
            {/* <div><hr></hr></div> */}
            
            </div> 
            <h1>The Best Holidays Start Here!</h1>
            <p className='about-text'>
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
            </p>
            <p style={{
              fontSize:"24px",
              fontWeight:"500",
              color : "#4B5563"
            }}><a href='https://maps.app.goo.gl/KCDicT7mh5yHHRc28' target='_blank' style={{color:'#4B5563'}}>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156.<br></br></a>
            Contact us: +91 9007062180</p>
            <Button title={'BOOK NOW'}/>
        </div>
      </div>
    </section>
  )
}

export default About
