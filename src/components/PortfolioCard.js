import React from 'react'
import Tech from './Tech'

const PortfolioCard = (props) => {
  return (
    <div className={`portfolio-card${(props.isPrimary) ? ' primary' : ''}`}>
      <div className='portfolio-card-logo'>
        <a href={props.url} target='_blank' title='Opens in a new tab'>
          <img src={props.logo} alt={props.title} />
        </a>
      </div>
      <div className='portfolio-card-body'>
        <div className='portfolio-card-title'>
          <h2>{props.title}</h2>
        </div>
        <div className='portfolio-card-details'>
          <div className='portfolio-card-role'>
            <h4>Role</h4>
            <ul>
              {props.role.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div className='portfolio-card-tech'>
            <h4>Tech</h4>
            <div className='tech-stack'>
              {props.tech.map((item, index) => <Tech key={index} name={item} />)}
            </div>
          </div>
        </div>
        <div className='portfolio-card-cta'>
          <a href={props.url} target='_blank' title='Opens in a new tab'>Visit site</a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
