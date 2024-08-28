import React, { useEffect } from 'react'
import './gallery.css'

import img1 from '../../Assets/ayodhya.webp'
import img2 from '../../Assets/baranti.webp'
import img3 from '../../Assets/bg-img.jpeg'
import img4 from '../../Assets/flower.jpg'
import img5 from '../../Assets/1.jpg'
import img6 from '../../Assets/large.jpg'
import img7 from '../../Assets/large-mb.jpg'
import img8 from '../../Assets/mithonDam.webp'
import img9 from '../../Assets/out.jpg'
import img10 from '../../Assets/recep.jpg'
import img11 from '../../Assets/room1.jpg'
import img12 from '../../Assets/small.jpg'
import Aos from 'aos'



const Gallery = () => {

  useEffect (() =>{
    Aos.init({ duration:2000});
 
   },[]);

  return (
    <section className='gallery-section' id='gallery'>
      <div data-aos='fade-up'>
        <h1 style={{'font-family': 'comic sans ms',
          marginBottom : "50px",
          fontSize : "28px"
        }}>Gallery</h1>
      </div>
      

      <div className='grid-wrapper'> 
           <div data-aos='zoom-in'>
             <img src={img1} alt='img1'/>
           </div>
           <div className='big' data-aos='zoom-in'>
             <img src={img2} alt='img1'/>
           </div>
          
           <div data-aos='zoom-in'>
             <img src={img4} alt='img1'/>
           </div>
           <div className='tall' data-aos='zoom-in'>
             <img src={img3} alt='img1'/>
           </div>
           <div data-aos='zoom-in'>
             <img src={img5} alt='img1'/>
           </div>
           <div data-aos='zoom-in'>
             <img src={img6} alt='img1'/>
           </div>
           <div data-aos='zoom-in'>
             <img src={img7} alt='img1'/>
           </div>
           <div data-aos='zoom-in' >
             <img src={img8} alt='img1'/>
           </div>
           <div data-aos='zoom-in'>
             <img src={img9} alt='img1'/>
           </div>
           <div className='big' data-aos='zoom-in'>
             <img src={img10} alt='img1'/>
           </div>
           <div data-aos='zoom-in'>
             <img src={img11} alt='img1'/>
           </div>
           <div data-aos='zoom-in'>
             <img src={img12} alt='img1'/>
           </div>
           <div data-aos='zoom-in'>
             <img src={img12} alt='img1'/>
           </div>
      </div>



    </section>
  )
}

export default Gallery
