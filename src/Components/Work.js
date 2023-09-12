import './WorkCardStyles.css'
import {React,useState,useEffect} from 'react';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';
import { Link } from 'react-router-dom';

const Work = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('showmore')) {
            setShowAllProjects({ showAllProjects: true });
            // localStorage.setItem('showmore', false);
        }
    }, []);
    const filteredProjects =  WorkCardData.slice(0, 3);
    console.log(filteredProjects);
    return (
      <div className='work-container'>
          <h1 className='project-heading'>Projects</h1>
          <div className='project-container'>
            
                {filteredProjects.map((val, index) => {
                  
                  return (
                      <WorkCard key={index} imgsrc={val.imgsrc} title={val.title} text={val.text} view={val.view} source={val.source} />
 
                  )
              })}
             
          </div>         
          
     </div>
  )
}

export default Work