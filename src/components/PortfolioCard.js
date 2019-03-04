import React from 'react'
import Tech from './Tech'

const PortfolioCard = (props) => {
  const {
    url, logo, title, role, tech, isContract
  } = props
  return (
    <div className='portfolio-card'>
      <div className='portfolio-card-logo'>
        <a href={url} target='blank' title='Opens in a new tab'>
          <img src={logo} alt={title} />
        </a>
      </div>
      <div className='portfolio-card-body'>
        <div className='portfolio-card-title'>
          <h2>
            {title}
            {isContract && <span> (Contract)</span>}
          </h2>
        </div>
        <div className='portfolio-card-details'>
          <div className='portfolio-card-role'>
            <h4>Role</h4>
            <ul>
              {role.map(item => <li key={item.key}>{item.value}</li>)}
            </ul>
          </div>
          <div className='portfolio-card-tech'>
            <h4>Tech</h4>
            <div className='tech-stack'>
              {tech.map(item => <Tech key={item.key} name={item.value} />)}
            </div>
          </div>
        </div>
        <div className='portfolio-card-cta'>
          <a href={url} target='blank' title='Opens in a new tab'>Visit site</a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
