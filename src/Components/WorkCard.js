import './WorkCardStyles.css'
import React from 'react';

import { NavLink } from 'react-router-dom';
import { FaFileDownload } from 'react-icons/fa';
import { saveAs } from 'file-saver';

const WorkCard = (props) => {

 const handledownload=(view)=>{
   
   const fileUrl = process.env.PUBLIC_URL+view;
   console.log(fileUrl);
   const fileName = view.split('/').pop();
   console.log(fileName);
    saveAs(fileUrl, fileName);
  };
    return (
        
        <div className='project-card'>
            <img src={props.imgsrc} alt=""  height={200}/>
          <h2 className='project-title'>{ props.title}</h2>
            <div className='pro-details'>
              <div><p>{ props.text}</p></div>
                <div className='pro-btns'>
                  <a className='btn' onClick={()=>handledownload(props.view)}>Document<FaFileDownload/></a>
                  <NavLink to={ props.source} className='btn'>SOURCE</NavLink>
                </div>
           </div>
        </div>
        
  )
}

export default WorkCard
