import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import Form from '../Components/Form'


const Contact = () => {
  
  const { id } = useParams();

  useEffect(() => { 
    
     if (id != null) {
      localStorage.setItem("subject",id);
    }
    else {
      localStorage.setItem("subject", "");
    }
    
  },[id]);
  
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Let's have a chat!!" />
      <Form key={id} item={id} />
      <Footer/>
    </div>
  )
}

export default Contact
