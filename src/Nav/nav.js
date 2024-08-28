import React, { useEffect, useState } from "react";
import "./nav.css";
import close from '../Assets/close.png'
import menu from '../Assets/menu.png'
import Button from "../Components/Common/button";
import Aos from "aos";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log('menuOpen: ', menuOpen);

  useEffect (() =>{
    Aos.init({ duration:2000});
 
   },[]);

  return (
    <BrowserRouter>
    <nav id="navbar">
    <Link to={'#'}> <div className='title' data-aos ='fade-down'>
      Kingsukh <br></br>Guest House
      </div></Link>
      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
        {
        menuOpen ? 
        <img src={close} className='close-img' onClick={() => setMenuOpen(!menuOpen)}/> 
        : 
        <img src={menu} alt="img" className='close-img'/>
         }
      </div>
      <ul className={menuOpen ? "open" : ""}>
      
      <Link to={'#navbar'}>
        <li data-aos ='fade-down'>Home</li> 
           </Link>
              <Link to={'#about'}>
                   <li data-aos ='fade-down'>About</li>
                      </Link>
                        <Link to={'#service'}>
                            <li data-aos ='fade-down'>Services</li>
                               </Link>
                                 <Link to={'#Rooms'}>
                                    <li data-aos ='fade-down'>Rooms</li> 
                                       </Link>
                                       <Link to={'#gallery'}>
                                         <li data-aos ='fade-down'>Gallary</li>
                                           </Link>
                                              <Link to={'#contact'}>
                                                  <li data-aos ='fade-down'>Contact</li> 
                                                       </Link>
      </ul>
      <div className="book-btn" data-aos ='fade-down'>
        <Button title={'BOOK NOW'} />
      </div>
    </nav>
    </BrowserRouter>
  );
};