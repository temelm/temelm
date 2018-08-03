import React from 'react'
import PortfolioCard from './PortfolioCard'

const PortfolioList = (props) => {
  return (
    <div className='portfolio-list'>
      {props.portfolioData.map((item, index) => <PortfolioCard key={index} {...item} />)}
    </div>
  )
}

export default PortfolioList
