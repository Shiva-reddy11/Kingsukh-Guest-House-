import React, { useEffect } from 'react'
import './contact-us.css'
import contactusimg from '../../Assets/contact-png.png'
import Aos from 'aos';

const ContactUs = () => {
  useEffect (() =>{
    Aos.init({ duration:2000});
 
   },[]);
  return (
    <section className="contact-section" id='contact'>
  <div className="contact-bg">
    <h3>Get in Touch with Us</h3>
    <h2>contact us</h2>
    <div className="line">
      <div />
      <div />
      <div />
    </div>
  </div>
  <div className="contact-body">
    <div className="contact-info" data-aos='fade-down'>
      <div >
       
        <span className='contact-titles'>Phone No</span>
       <a href='tel:+91 9007062180'> <span className="text" >+91 9007062180</span></a>
      </div>
      <div>
        
        <span className='contact-titles'>E-mail</span>
       <a href='mailto:kkghosh0099@gmail.com'> <span className="text">kkghosh0099@gmail.com</span></a>
      </div>
      <div >
       
        <span className='contact-titles'>Address</span>
        <a href='https://maps.app.goo.gl/KCDicT7mh5yHHRc28' target='_blank'><span className="text" >
        Beside Barshal Water Tank,
        Manpur, Barhanti,
        West Bengal 723156 
        </span></a>
      </div>
     
    </div>
    <div data-aos="fade-up" className="contact-form">
      <form >
        <h1 style={{marginBottom: '40px',
          fontFamily : 'comic sans ms'
        }}>Send A Message</h1>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
          />
          <input type="text" className="form-control" placeholder="Last Name" />
        </div>
        <div>
          <input type="email" className="form-control" placeholder="E-mail" />
          <input type="text" className="form-control" placeholder="Phone" />
        </div>
        <textarea
          rows={5}
          placeholder="Write your message here..."
          className="form-control"
          defaultValue={""}
        />
        <input type="submit" className="send-btn" defaultValue="Send" />
      </form>
      <div>
        <img src={contactusimg} alt="" />
      </div>
    </div>
  </div>
  <div className="map" data-aos="fade-up">
    <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.9435035243196!2d86.857215474787!3d23.58633729505608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e1!3m2!1sen!2sin!4v1724468200791!5m2!1sen!2sin" 
      width="100%"
      height={450}
      frameBorder={0}
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex={0}
    />
  </div>
</section>

  )
}

export default ContactUs
