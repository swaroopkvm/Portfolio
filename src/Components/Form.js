import React from 'react'
import './FormStyles.css'
import { useState,useEffect} from 'react'
import { FaHandPeace } from 'react-icons/fa';
import serverURl from '../Serverurl';

const Form = (props) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: props.item || '', 
    notification: false,
    description: ''
  });

  const [formfilled, setformfilled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showDisclaimer, setshowDisclaimer] = useState(true);
   
  useEffect(() => {

    setFormData((prevData) => ({
      ...prevData,
      subject: props.item || '', 
    }));
  }, [props.item]);
  
  useEffect(() => { 
    const { name, email, subject, description } = formData;
    const isfilled = name && email && subject && description;
    setformfilled(isfilled);
  }, [formData]);


   const handleChange = (e) => {
     const { id, value, type, checked } = e.target;
     const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [id]: newValue });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try
    {
      const response = await fetch(serverURl.nodeserverurl+'submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (response.status === 200) {
           setShowPopup(true);                 
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('description').value = '';
        document.getElementById('notification').checked = false;
        setformfilled(false);
        formData.subject = '';
        setFormData(formData);

      } else {
        alert('Error submitting form');
      }
    }
    catch (error)
    {
      console.error(error);
    }
   
  };
   
  const closePopup = () => {      
    setShowPopup(false);
  };
  const closeDisclaimer = () => {      
    setshowDisclaimer(false);
  };
  
  
  return (
    <div className='form'>
        <form onSubmit={handlesubmit}>
        <label>Name <span style={{color:'red'}}>*</span></label> 
        <input type='text' placeholder='Type your Name' id='name' onChange={handleChange} required />     
        <label>Email <span style={{ color: 'red' }}>*</span></label>        
        <input type='email' placeholder='Type your Email' id='email' onChange={handleChange} required />       
        <label>Subject <span style={{ color: 'red' }}>*</span></label>        
        <input type='text' placeholder='Type your Subject' id='subject' value={formData.subject} onChange={handleChange} required /> 
        <div>
          <label style={{ color: 'yellow' }}>Notification : </label>
          <input type='checkbox' id='notification' onChange={handleChange} />
       </div>       
        
        <label>Description <span style={{ color: 'red' }}>*</span></label> 
        <textarea rows='6' placeholder='Type your Message here...' id='description' onChange={handleChange} required />
        
        <button type='submit' id='displaybtn'
          className={`${formfilled ? 'btn' : 'hidden'}`}>Submit</button>         
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Form submitted successfully!</p>
            <button onClick={closePopup} >Close</button>
          </div>
        </div>
      )}
      {showDisclaimer && (
        <div className="popup">
          <div className="popup-content">
            <h1 style={{textAlign:'center'}}>DISCLAIMER!!</h1>
            <p style={{fontSize: '1rem',fontWeight:'700'}}>Fill out the form below.
              If the form is not filled out, <br/>the submit button may disappear when hovered.
            </p>
            <button onClick={closeDisclaimer} >Understood<FaHandPeace size={20} style={{color:'black',marginLeft:'0.3rem'}} /> </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Form

