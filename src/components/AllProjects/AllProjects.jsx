import React, { useState } from 'react';
import './AllProjects.css';
import MyProjectsData from '../../constants/listprojects';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const AllProjects = () => {
  const [visibleProjects, setVisibleProjects] = useState(9);

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

return (
  <>
    <Navbar /> {/* Show header */}
    <div id='projects' className='myproject'>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="myproject-title"
      >
        <h2>All Projects</h2>
      </motion.div>

      <div className="myprojects-container">
        {MyProjectsData.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={index}
            className='box-image'
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              delay: index * 0.1,
              ease: 'easeOut'
            }}
          >
            <img src={project.image_project} alt={project.name} />
            <div className='NomProject'>{project.name}</div>
          </motion.div>
        ))}
      </div>

      {visibleProjects < MyProjectsData.length && (
        <div className="myproject-loadmore" onClick={handleLoadMore}>
          <div>Load more</div>
        </div>
      )}
    </div>
    <Footer />
  </>
);

};

export default AllProjects;
