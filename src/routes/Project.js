import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import PricingCard from '../Components/PricingCard'
import Work from '../Components/Work'
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa'

const Project = () => {
  const toggledata = () => {
    localStorage.setItem("showmore", true);
  }
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Projects" text="Some of my most Recent works..." />
      <Work />
      <center>
        <Link to="/MoreProject" className='moreprojects' id='Moreprojects' onClick={toggledata}>More Projects <FaArrowCircleRight size={25} /></Link>       
      </center>  
      <PricingCard />
      <Footer/>
    </div>
  )
}

export default Project
