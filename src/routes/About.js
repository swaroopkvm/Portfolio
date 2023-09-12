import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import AboutContent from '../Components/AboutContent'
import Testimonials from '../Components/Testimonials'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="I am Full Stack Devloper" />
      <AboutContent />
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default About
