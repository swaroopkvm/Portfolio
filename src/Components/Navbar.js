import './NavbarStyles.css'
import swaroop from '../Assets/swaroop.png'
import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import { FaBars,FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);
    const changecolor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        }
        else setColor(false);
    }
    window.addEventListener("scroll",changecolor);
    const handleclick = () => { 
        setClick(!click);
    }

  return (
      <div className={ color?'header header-bg':'header'}>        
            <div id='swaroop'>
              <img  src={swaroop} /> 
                <Link to="/"><h1>Swaroop Kasilanka</h1> </Link> 
            </div>         
          <ul className={ click ?'nav-menu active':'nav-menu'}>
              <li>
                  <Link to="/">Home</Link>
              </li>
               <li>
                  <Link to="/Project">Project</Link>
              </li>
               <li>
                  <Link to="/About">About</Link>
              </li>
               <li>
                  <Link to="/Contact">Contact</Link>
              </li>
          </ul>
          <div className='hamburger'  onClick={handleclick}>
              {click ?
                  (<FaTimes size={20} style={{ color: 'white' }}/>)
                  :
                  (<FaBars size={20} style={{ color: 'white' }}/>)
              }  
          </div>
    </div>
  )
}

export default Navbar
