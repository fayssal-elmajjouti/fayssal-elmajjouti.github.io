import React ,{ useState, useEffect } from 'react'
import './Hero.css'
import shape1 from '../../assets/shape1.svg'
import shape2 from '../../assets/shape2.svg'
import myimage from '../../assets/shape3.svg'
import mycv from '../../constants/El_majjouti_Fayssal_CV.pdf'
import {motion, scale} from 'framer-motion'

import { useNavigate, useLocation } from 'react-router-dom'

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }
  
    const closeMenu = () => {
      setIsMenuOpen(false)
    }

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  // Handle navigation with scroll
  const handleNavigation = (sectionId) => {
    closeMenu()
    
    if (location.pathname === '/') {
      // Already on home page, just scroll
      scrollToSection(sectionId)
    } else {
      // Navigate to home page first, then scroll
      navigate('/')
      // Use setTimeout to ensure page renders before scrolling
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    }
  }

  const handleHomeNavigation = () => {
    closeMenu()
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Handle hash in URL on page load/refresh
    useEffect(() => {
      if (location.hash && location.pathname === '/') {
        const sectionId = location.hash.substring(1)
        setTimeout(() => {
          scrollToSection(sectionId)
        }, 100)
      }
    }, [location])

  return (
    <div className='hero'>
        <div className="profile">
            <motion.img
            whileInView={{opacity:1, y: 0}}
            initial={{opacity:1, y: -50}}
            transition={{duration:0.7}}
            className='shape1' src={shape1} alt='Fayssal EL majjouti'/>
            <motion.img 
            whileInView={{opacity:1, x: 0}}
            initial={{opacity:1, x: -50}}
            transition={{duration:0.7}}
            className='shape2' src={shape2} alt='Fayssal EL majjouti'/>
            <motion.img 
            whileInView={{opacity:1, scale: 1}}
            initial={{opacity:1, scale: 0.7}}
            transition={{duration:0.7}}
            className='myimage' src={myimage} alt='Fayssal EL majjouti'/>
            
        </div>
        <div className="description">
            <motion.h1
            whileInView={{opacity:1, y: 0}}
            initial={{opacity:1, y: -100}}
            transition={{duration:0.5}}
            ><div>I'm Fayssal El majjouti</div>Senior Web developer</motion.h1>
            <motion.p
            whileInView={{opacity:1, y: 0}}
            initial={{opacity:1, y: -100}}
            transition={{duration:0.5}}
            >Passionate Web developer, specialized in creating applications and e-commerce websites. Expert in PHP, Laravel, React.js, Vue.js, Wordpress</motion.p>
            <motion.div
            whileInView={{opacity:1, y: 0}}
            initial={{opacity:1, y: -100}}
            transition={{duration:0.5}}
            className="hero-action">
                <div className="btn hero-connect">  <a href="/#contact" onClick={(e) => { e.preventDefault(); handleNavigation('contact'); }}>Connect with me</a></div>
                <div className="btn hero-resume"><a href={mycv} target="_blank" rel="noopener noreferrer">My resume</a></div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero
