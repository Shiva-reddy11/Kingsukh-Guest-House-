import React from 'react'
import './footer.css'
import Button from '../Common/button'
import fbimg from '../../Assets/facebook.png'
import instaimg from '../../Assets/instagram.png'
import twitterimg from '../../Assets/twitter.png'
import youtubeimg from '../../Assets/youtube.png'

const Footer = () => {

return (

    <section className='footer' id='footer'>
        <div className='footer-md'>
          <h1>Kingsukh GuestHouse</h1>
          <p>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
          <Button title={'BOOK NOW'}/>
          <div className='social-media'>
            <img src={fbimg}/>
            <img src={instaimg}/>
            <img src={twitterimg}/>
            <img src={youtubeimg}/>
           
          </div>
        </div>
        <div className='footer-md1'>
            <div className="footer-col">
            <h1>QUICK LINKS</h1>
            <a href='#'><li>Browse Destinations</li></a>
            <a href='#'><li>Special Offers & Packages</li></a>
            <a href='#'><li>Room Types & Amenities</li></a>
            <a href='#'><li>Customer Reviews & Ratings</li> </a>
            <a href='#'><li>Travel Tips & Guides</li> </a>
            </div>
            <div className="footer-col">
            <h1>OUR SERVICES</h1>
            <a href='#'><li>Concierge Assistance</li></a>
            <a href='#'><li>Flexible Booking Options</li></a>
            <a href='#'><li>Airport Transfers</li></a>
            <a href='#'><li>Wellness & Recreation</li> </a>
            </div>
            <div className="footer-col" id='f-c-1'>
            <h1>CONTACT US</h1>
            <a href='https://maps.app.goo.gl/KCDicT7mh5yHHRc28' target='_blank'><li>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</li></a>
            <a href='mailto:kkghosh0099@gmail.com' target='_blank'><li>kkghosh0099@gmail.com</li></a>
            <a href='tel:+91 9007062180'><li>+91 9007062180</li></a>
            
            </div>
           
        </div>
    </section>
)
}

export default Footer
