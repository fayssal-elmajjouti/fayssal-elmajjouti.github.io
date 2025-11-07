import React from 'react';
import './Footer.css'
import linkedin from '../../assets/linkedin.png'
import xing from '../../assets/xing.png'
import github from '../../assets/github.png'
import gmail from '../../assets/gmail.png'
import whatsapp from '../../assets/whatsapp.png'

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='ligne'></div>
      <div className='findme'>
        <div>FIND ME ON</div>
        {/* <div>Feel free to <span>connect</span> with me</div> */}
      </div>
      <div className="rs">
        <ul>
          <li><a href='https://www.linkedin.com/in/fayssalmjt/' target='_blank'><img src={linkedin} alt='Linkedin Fayssal El majjouti'/></a></li>
          <li><a href='https://github.com/fayssal-elmajjouti/' target='_blank'><img src={github} alt='Github Fayssal El majjouti'/></a></li>
          <li><a href='mailto:fayssal.elmajjouti@gmail.com' target='_blank'><img src={gmail} alt='Gmail Fayssal El majjouti'/></a></li>
          <li><a href='https://wa.me/212689574018' target='_blank'><img src={whatsapp} alt='Whatsapp Fayssal El majjouti'/></a></li>
          <li><a href='https://www.xing.com/profile/Fayssal_Elmajjouti/web_profiles' target='_blank'><img src={xing} alt='Xing Fayssal El majjouti'/></a></li>
        </ul>
      </div>
      <div className="copyright">
        Fayssal El majjouti - Tous droits réservés © <span>{(new Date().getFullYear())}</span>
      </div>
    </div>
  )
}

export default Footer
