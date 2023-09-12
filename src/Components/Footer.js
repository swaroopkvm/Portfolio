import React from 'react'
import '../Components/FooterStyles.css'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (

    <div className='footer'>
      <div className='footer-container'>
              <div className='left'>
                  <div className='location'>
                      <FaHome size={20} style={{ color: 'white', marginRight: '2rem' }} />
                      <p>123 HOUSING SOCIETY</p>
                      <p>India.</p>
                  </div>
                  <div className='phone'>
                      <h4>
                          <FaPhone size={20} style={{ color: 'white', marginRight: '2rem' }} />
                      +91 9912356541
                      </h4>     
                  </div>
                  <div className='email'>
                      <h4>
                          <FaMailBulk size={20} style={{ color: 'white', marginRight: '2rem' }} />
                      swaroopkvm10@gmail.com
                      </h4>     
                  </div>
            </div>
              <div className='right'>
                  <h4>About Me</h4>
          <p>Hi Folks! My name is <strong style={{color:'yellow'}}>Swaroop kasilanka.</strong>I graduated from
            <a href='https://www.iitpkd.ac.in/' target='_blank'style={{color:'yellow'}}> IIT PALAKKAD</a> in year 2022 and currently working as a Full
                  Stack Developer in Technoforte software,Bangalore and as a client for Toyota Kirloskar Motors,Bidadi.
                  </p>
                  <div className='social'>
                     <a href='https://www.facebook.com/' target="_blank"> <FaFacebook size={30} style={{ color: 'white', marginRight: '2rem' }} /></a> 
                     <a href='https://www.instagram.com/' target="_blank"><FaInstagram size={30} style={{ color: 'white', marginRight: '2rem' }} /></a>
                     <a href='https://in.linkedin.com/' target="_blank"><FaLinkedin size={30} style={{ color: 'white', marginRight: '2rem' }} /></a> 
                     <a href='https://twitter.com/i/flow/login' target="_blank"><FaTwitter size={30} style={{ color: 'white', marginRight: '2rem' }}/></a> 
                  </div>
            </div>
      </div>
      <center><p style={{ color: 'yellow', marginTop: '1rem' }}>&copy; {currentYear} Swaroop Kasilanka. All rights reserved.</p></center>
      <div class="ticker-container">
        <p class="ticker-text">This website is created using HTML, CSS, JAVASCRIPT, REACTJS, NODEJS. For More Information please check the Contact Page.</p>
      </div>
      
    </div>
  )
}

export default Footer
