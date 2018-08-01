import React from 'react'
import PortfolioList from './PortfolioList'

const Portfolio = (props) => {
  return (
    <section id='portfolio'>
      <div className='wrapper'>
        <h1>Portfolio</h1>
        <PortfolioList portfolioData={props.portfolioData} />
      </div>
    </section>
  )
}

export default Portfolio
