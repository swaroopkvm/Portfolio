import './Testimonials.css';
import React from 'react';
import TestimonialData from './TestimonialsData';
import { useState } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

const Testimonials = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? TestimonialData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === TestimonialData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
     <div className='testimonials'>
            <h2>TESTIMONIALS</h2>
            <div className="carousel">
                <div className="testimonial-container">
                {TestimonialData.map((testimonial,index) => (
                  <div className={`testimonial ${index === currentIndex ? 'active' : ''}`}    
                        style={{display:`${index === currentIndex ? 'block' : 'none'}`}}
                        key={testimonial.id}                      
                    >                          
                        <p className="quote">{testimonial.quote}</p>                       
                        <p className="name">{testimonial.name}</p>                       
                        <p className="position">{testimonial.position}</p>                       
                    </div>                   
                ))}   
                </div>    
                <button className="prev-button" onClick={handlePrevClick}>
                  <FaArrowCircleLeft size={30} />               
                </button>              
                <button className="next-button" onClick={handleNextClick}>                  
                  <FaArrowCircleRight size={30} />                
                </button>               
            </div>           
      </div>
    
 
   )
 }
 
 export default Testimonials
 