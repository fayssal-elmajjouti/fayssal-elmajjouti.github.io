import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
// import Domaines from './components/Domaines/Domaines';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import MyProjects from './components/MyProjects/MyProjects';
import Experiences from './components/Experiences/Experiences';
import Contact from './components/Contact/Contact';
import AllProjects from './components/AllProjects/AllProjects';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            {/* <Domaines /> */}
            <Skills />
            <Experiences />
            <MyProjects />
            <Contact />
            <Footer />
          </>
        } />
         <Route path="/AllProjects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
};

export default App;

