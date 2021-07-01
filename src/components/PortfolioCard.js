/* eslint-disable */

import React from 'react'
import Collapsible from 'react-collapsible'
import Tech from './Tech'

const PortfolioCard = (props) => {
  const {
    url, logo, title, subTitle, date, role, tech
  } = props
  const portfolioCardClass = 'portfolio-card'
  return (
    <Collapsible trigger={title}>
      <div className={portfolioCardClass}>
        <div className='portfolio-card-logo'>
          <img src={logo} alt={title} />
        </div>
      </div>
    </Collapsible>
  )
}

export default PortfolioCard
