import React, { useRef,useState } from 'react';
import './Contact.css'
import {motion} from 'framer-motion'
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import lottieContact from '../../assets/contact.json'
import Lottie from 'lottie-react'
import emailjs from '@emailjs/browser';

import email from '../../assets/gmail.png'
import location from '../../assets/broche-de-localisation.png'
import phone from '../../assets/appel.png'


const Contact = () => {

  const form = useRef();
  const [successPopup, setSuccessPopup] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_96o0kbe', 'template_z6iurvs', form.current, {
        publicKey: 'WaxhlCb8xwIj7pzaK',
      })
      .then(
        () => {
          console.log('Message Sent!');
        setSuccessPopup(true); // Show popup
        form.current.reset(); // Optionally reset form
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div id='contact' className='contactContainer'>
      <motion.h2
      whileInView={{opacity:1, y: 0}}
      initial={{opacity:1, y: -100}}
      transition={{duration:0.5}}
      >Get in Touch</motion.h2>
      <motion.div
      whileInView={{opacity:1, y: 0}}
      initial={{opacity:1, y: -100}}
      transition={{duration:0.5}}
      className='contactInfos'>
        <div className='cordonnees'>
          {/* <div style={{width:"50%", margin:"0 auto"}}>
            <Lottie
              animationData={lottieContact}
              loop
              autoplay
            />
          </div> */}
          
          <p>Get in touch with us today to enhance your digital presence.</p>
            <div className='infosperso'>
              <div className='box-contact'>
                <div className='email'>
                  <img src={email} alt=''/>
                  <h4>Email Address</h4>
                  <a href='mailo:fayssal.elamjjouti@gmail.com'> fayssal.elmajjouti@gmail.com</a>
                </div>
                
              </div>
              <div className='box-contact'>
                <div className='phone'>
                  <img src={phone} alt=''/>
                  <h4>Phone Number</h4>
                  <a href='tel:+212689574018'> (+212) 689 57 40 18</a>
                </div>
                
              </div>
              <div className='box-contact'>
              <div className='address'>
                  <img src={location} alt=''/>
                  <h4>Location</h4>
                  <span>Rabat-Salé, Morocco</span>
              </div>
                
              </div>
              
            </div>
        </div>
        <div className='formsContainer'>
          <div>Get in touch with us today to elevate your digital presence and start creating unforgettable online experiences. Have questions or need more information? </div>
          <div>Contact us today and let's start a conversation about how we can help your brand thrive online.</div>
          <h4>Leave A Comment</h4>
          <form className='forms' ref={form} onSubmit={sendEmail}>
            <div>
                <label>Full name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$"
                  title="Please enter letters only"
                  placeholder="Your full name"
                />
            </div>
            <div>
               <label>Email</label>
                <input type='mail' id='' name="user_email" required className='' placeholder='example@email.com'/>
            </div>
            <div>
              <label>Phone</label>
              <input
                type="tel"
                name="user_phone"
                required
                pattern="[0-9]+"
                inputMode="numeric"
                title="Please enter numbers only"
                placeholder=""
              />
            </div>
            <div>
              <label>Object</label>
              <input type='text' id='' name='object' required className='' placeholder=''/>
            </div>
            <div>
              <label>Message</label>
              <textarea type='textarea' id='message' name="message" required className='' placeholder='Write your message here ...'/>
            </div>
            <input type="submit" className='submit' value="Send" />
          </form>
        </div>
      </motion.div>

      {successPopup && (
  <div className="popup">
    <div className="popup-content">
      <p>Message sent successfully!</p>
      <button onClick={() => setSuccessPopup(false)}>Close</button>
    </div>
  </div>
)}

    </div>
  )
}




export default Contact





