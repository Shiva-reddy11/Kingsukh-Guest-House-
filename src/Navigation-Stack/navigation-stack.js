import React, { useEffect } from 'react'
import Hero from '../Components/Hero/hero'
import About from '../Components/About/about'
import Cards from '../Components/GuestHouse-Lists/cards'
import ServicesSection from '../Components/Services/services-section'
import Count from '../Components/Count/count'
import ContactUs from '../Components/Contact-Us/contact-us'
import Footer from '../Components/Footer/footer'
import Gallery from '../Components/Gallery/gallery'
import { Nav } from '../Nav/nav'
import Aos from 'aos'
import { BrowserRouter, Route, Router } from 'react-router-dom'




const NavigationStack = () => {
  
  return (
    <>
   
    <Nav/>
    <Hero/>
    <About/>
    <Cards/>
    <ServicesSection/>
    <Count/>
    <Gallery/>
    <ContactUs/> 
    <Footer/>
    
    
    
    
    
    </>
  )
}

export default NavigationStack
