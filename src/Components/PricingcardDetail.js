import React from 'react'
import { Link } from 'react-router-dom'
import './PricingCardStyles.css'

const PricingcardDetail = (props) => {
  return (
            <div className='card'>
                <h3 style={{ color: 'red' }} id='subjectname'>{props.heading}</h3>
                <span className='bar'></span>
                <p className='btc'>
                    {props.price}
                    <p style={{ color: 'red', fontSize: '1rem' }}>per month</p>
                </p>   
                <p>-{props.applicationname}-</p>
                <p>-{props.Type}-</p>
                <p>-{props.Languages}-</p>
          <Link to={`/Contact/${props.heading}`} className='btn btn-new'>
                    Get Details
                </Link>
            </div>
  )
}

export default PricingcardDetail