import React from 'react';
import './HeroImgStyles.css';
import IntroImg from '../Assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
      <div className="hero">
          <div className="mask">
              <div className="intro-img" />
          </div>
          <div className='content'>
              <p>HI, I'M SWAROOP KASILANKA</p>
              <h1>FULL STACK DEVELOPER</h1>
              <div>
                  <Link to="/Project">
                      <button className="btn">Projects</button>
                  </Link>
                  <Link to="/Contact">
                      <button className="btn btn-light">Contact</button>
                  </Link>
              </div>
          </div>
    </div>
  )
}

export default HeroImg
