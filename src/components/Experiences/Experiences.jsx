import React from 'react'
import './Experiences.css'
import experiencesData from '../../constants/experiencesdata'
import {motion} from 'framer-motion'

const Experiences = () => {
  return (
    <div id='experience' className='experiences'>
      <motion.h2
      whileInView={{opacity:1, y: 0}}
      initial={{opacity:1, y: -100}}
      transition={{duration:0.5}}
      >My Experiences</motion.h2>
      <div>
        {experiencesData
  .sort((a, b) => b.num - a.num) // descending order by 'num'
  .map((experiences, index) => (
    <div key={index} className='container-experience'>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className='container-year'>
        <p className='year'>{experiences.year}</p>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className='container-content'>
        <h3 className='entreprise'>
          {experiences.poste} - <span className='entreprise-span'>{experiences.entreprise}</span>
        </h3>
        <p className='entreprise-description'>{experiences.description}</p>
        {experiences.technologies.map((tech, index) => (
          <span className='tech-span' key={index}>{tech}</span>
        ))}
      </motion.div>
    </div>
))}

      </div>
    </div>
  )
}

export default Experiences
