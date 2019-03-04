import React from 'react'
import PortfolioCard from './PortfolioCard'

const PortfolioList = (props) => {
  const { portfolioData } = props
  return (
    <div className='portfolio-list'>
      {portfolioData.map(item => <PortfolioCard key={item.key} {...item} />)}
    </div>
  )
}

export default PortfolioList
