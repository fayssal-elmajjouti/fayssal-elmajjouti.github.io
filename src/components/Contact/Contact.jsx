import React, { useRef,useState } from 'react';
import './Contact.css'
import {motion} from 'framer-motion'
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import lottieContact from '../../assets/contact.json'
import Lottie from 'lottie-react'
import emailjs from '@emailjs/browser';

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
          <div style={{width:"50%", margin:"0 auto"}}>
            <Lottie
              animationData={lottieContact}
              loop
              autoplay
            />
          </div>
          
          <p>Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.</p>
            <div className='infosperso'>
              <div className='email'>
                <h4>Email: </h4>
                <a href='mailo:fayssal.elamjjouti@gmail.com'> fayssal.elmajjouti@gmail.com</a>
              </div>
              <div className='phone'>
                <h4>Phone: </h4>
                <a href='tel:+212689574018'> (+212) 689 57 40 18</a>
              </div>
              <div className='address'>
                <h4>Address: </h4>
                <span>Rabat-Salé</span>
              </div>
              
            </div>
        </div>
        <div className='formsContainer'>
          <h4>Send a message</h4>
          <form className='forms' ref={form} onSubmit={sendEmail}>
            <div>
                <label>Full name</label>
<input
  type="text"
  name="user_name"
  required
  pattern="[A-Za-z\s]+"
  title="Please enter letters only"
  placeholder=""
/>
            </div>
            <div>
               <label>Email</label>
                <input type='mail' id='' name="user_email" required className='' placeholder=''/>
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
              <textarea type='textarea' id='message' name="message" required className='' placeholder=''/>
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





