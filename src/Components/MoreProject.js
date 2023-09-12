import React from 'react'
import Work from './Work'
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';
import './WorkCardStyles.css'
import Navbar from './Navbar';

const MoreProject=()=> {
  return (
    
    <div className='work-container'>
      <Navbar />
          <h1 className='project-heading'>Projects</h1>
          <div className='project-container'>         
                {WorkCardData.map((val, index) => {   
                  return (
                      <WorkCard key={index} imgsrc={val.imgsrc} title={val.title} text={val.text} view={val.view} source={val.source} />
                  )
              })}
             
          </div>         
          
     </div>
  )
}

export default MoreProject
