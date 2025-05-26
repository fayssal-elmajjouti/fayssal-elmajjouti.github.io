import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
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
    <div className='navbar'>
      <div className='logo'>
        <a href="/" onClick={(e) => { e.preventDefault(); handleHomeNavigation(); }} style={{ cursor: 'pointer' }}>
          <img src={logo} alt='Logo'/>
        </a>
      </div>
      
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li className="item-menu">
          <a href="/" onClick={(e) => { e.preventDefault(); handleHomeNavigation(); }} data-hover="Home">Home</a>
        </li>
        <li className="item-menu">
          <a href="/#skills" onClick={(e) => { e.preventDefault(); handleNavigation('skills'); }} data-hover="Skills">Skills</a>
        </li>
        <li className="item-menu">
          <a href="/#experience" onClick={(e) => { e.preventDefault(); handleNavigation('experience'); }} data-hover="Experiences">Experiences</a>
        </li>
        <li className="item-menu">
          <a href="/AllProjects" onClick={(e) => { e.preventDefault(); closeMenu(); navigate('/AllProjects'); }} data-hover="Portfolio">Portfolio</a>
        </li>
      </ul>
      
      <div className="nav-connect">
        <a href="/#contact" onClick={(e) => { e.preventDefault(); handleNavigation('contact'); }}>Connect with me</a>
      </div>
      
      <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Navbar