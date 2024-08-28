import React, { useEffect } from 'react';
import './card.css';
import cardimg1 from '../../Assets/small.jpg'
import cardimg2 from '../../Assets/large.jpg';
import Button from '../Common/button';
import { carddata } from '../../Data/data';
import Aos from 'aos';

const Cards = () => {
  useEffect (() =>{
    Aos.init({ duration:2000});
 
   },[]);
  return (
    <section className='card-section' id='Rooms'>
      <div data-aos="fade-down" className='card-title'>
        <h3>Our Living Room</h3>
        <div className='card-hr'></div>
        <h1>The Most Memorable Rest Time Starts Here.</h1>
        <div className='card-hr1'></div>
      </div>
      <div className='cards'>
      {
        carddata.map((val, index) => (
          <div className='card-md' key={index} data-aos="zoom-in-up">
            <img src={cardimg1} alt='img' className='card-img1'  />
            <h2>{val.roomtype}</h2>
            <p>{val.roomdescription}<br /><span className='card-price'>{val.roomprice}</span></p>
            <Button title={val.bookingbtn} />
          </div>
        ))
      }
      </div>
    </section>
  );
}

export default Cards;
