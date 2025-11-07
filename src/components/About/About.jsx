import React from 'react'
import './About.css'
// import bgimageabout from '../../assets/.png'
// import profileimg from '../../assets/.png'
import experience from '../../assets/experience.png'
import project from '../../assets/project.png'
import clients from '../../assets/clients.png'
const about = () => {
  return (
    <div className='about'>
      {/* 
      <div className='about-title'>
            <h1>About me</h1>
             <img src={bgimageabout} alt=""/>
        </div>
        <div className='about-section'>
            <div className='about-left'>
                 <img src={profileimg} alt=""/>
            </div>
            <div className='about-right'>
              <div className="about-para">
                <p>
                Développeur Web passionné, spécialisé en création d'applications et de sites e-commerce. Expert en PHP, Laravel, Vue.js, Wordpress et bases de données SQL. Autonome, rigoureux, je conçois des solutions performantes et adaptées aux besoins utilisateurs dans des environnements agiles.
                </p>
              </div>
              <div className="about-skills">
              </div>
            </div>
        </div>
      */
      }
        
        <div className="about-achievements">
          <div className="about-achievement">
            <img src={experience} alt=''/>
            <h1>+6</h1>
            <p>Years of experience</p>
          </div>
          <div className="about-achievement">
          <img src={project} alt=''/>
            <h1>+30</h1>
            <p>Projects completed</p>
          </div>
          <div className="about-achievement">
          <img src={clients} alt=''/>
            <h1>+15</h1>
            <p>Happy clients</p>
          </div>
        </div>
    </div>
  )
}

export default about
