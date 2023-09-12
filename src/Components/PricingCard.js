import { Link } from 'react-router-dom'
import './PricingCardStyles.css'
import PricingcardDetail from './PricingcardDetail'
import PricingCardData from './PricingCardData'
import React from 'react'

const PricingCard = () => {  
    
    return (
        <div className='pricing'>
            <div className='card-container'>
            {PricingCardData.map((val,index) => {
                return (
                    <PricingcardDetail heading={val.heading} price={val.price} applicationname={val.applicationname} Type={val.Type} Languages={val.Languages } />
                )
            })}
            </div>
            
    </div>
        
  )
}
            

export default PricingCard
