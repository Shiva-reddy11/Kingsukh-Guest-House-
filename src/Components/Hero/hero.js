import React, { useEffect } from 'react'
import './hero.css'
import bgimg from '../../Assets/bg-img.jpeg' 
import Button from '../Common/button'
import Margin from '../Common/margin'
import { Nav } from '../../Nav/nav'
import Aos from 'aos'

const Hero = () => {

  useEffect (() =>{
    Aos.init({ duration:2000});
 
   },[]);
  return (
    <>
    <section className='hero-section' data-aos="fade-up">
        <div className='hero-title'>
          <div>
          <p className='hero-title-text1'>Simple - Unique - Friendly</p>
            <p className='hero-title-text2'>Make Yourself At Home<br></br>
            In Our <span style={{color:'#e82574'}}>Guest House</span>.</p>
          </div>
          <div className='booking-container'>
           <Button title={'BOOK NOW'}/>
          </div>
        </div>
    </section>
        <Margin/>
   
    </>
  )
}

export default Hero
