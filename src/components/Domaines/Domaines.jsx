import React from 'react'
import './Domaines.css'
import {motion} from 'framer-motion'
// import webDev from '../../assets/'
// import webDes from '../../assets/'
// import mobileDev from '../../assets/'
// import graphDes from '../../assets/'
// import seo from '../../assets/'
// import devops from '../../assets/'

const Domaines = () => {
  return (
    <div className='containerDomaines'>
      <motion.h2
      whileInView={{opacity:1, y: 0}}
      initial={{opacity:1, y: -100}}
      transition={{duration:0.5}}
      >Domaines</motion.h2>
      <div className="domaines">
        <div className="boxDomaines">
          {/* <img src={webDev} alt=''/> */}
          <p>Web Developpement</p>
        </div>
        <div className="boxDomaines">
          {/* <img src={webDes} alt=''/> */}
          <p>Web Design</p>
        </div>
        <div className="boxDomaines">
          {/* <img src={mobileDev} alt=''/> */}
          <p>Mobile Developpement</p>
        </div>
        <div className="boxDomaines">
          {/* <img src={graphDes} alt=''/> */}
          <p>Graphic Design</p>
        </div>
        <div className="boxDomaines">
          {/* <img src={seo} alt=''/> */}
          <p>SEO</p>
        </div>
        <div className="boxDomaines">
          {/* <img src={devops} alt=''/> */}
          <p>DevOps</p>
        </div>
      </div>
    </div>
  )
}

export default Domaines
