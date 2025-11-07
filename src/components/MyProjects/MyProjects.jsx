import React from 'react'
import './MyProjects.css'
import MyProjectsData from '../../constants/listprojects'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';


const specificNums = [1, 2, 3, 22, 23, 10];

const MyProjects = () => {
  return (
    <div id='projects' className='myproject'>
        <motion.div 
        whileInView={{opacity:1, y: 0}}
        initial={{opacity:1, y: -100}}
        transition={{duration:0.5}}
        className="myproject-title"><h2>A selection of my work</h2></motion.div>

        <div className="myprojects-container">
        {MyProjectsData.filter(project => specificNums.includes(project.num)).map((project, index) => (
        <motion.div
          key={index}
          className='box-image'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,          // smooth transition
            delay: index * 0.1,     // 0.5s delay between each image
            ease: 'easeOut'         // optional: ease for smoothness
          }}
        >
          <img src={project.image_project} alt={project.name} />
          <div className='NomProject'>{project.name}</div>
        </motion.div>
      ))}
        </div>

        <Link to="/AllProjects" className="myproject-showmore">
          <div>Show more</div>
        </Link>

        
    </div>
  )
}

export default MyProjects
