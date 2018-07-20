import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = (props) => {
  return (
    <nav className='navbar'>
      <div className='wrapper'>
        <div className='navbar-hamburger'>
          <a href='#hamburger' onClick={props.handleHamburgerToggle}>
            <FontAwesomeIcon icon='bars' />
          </a>
        </div>
        <div className={['navbar-links', ((props.hamburgerToggle) ? ' expanded' : '')].join('')}>
          <ul>
            <li>
              <a href='#portfolio'>Portfolio</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='navbar-brand'>
          <a href='/'>Mustafa Temel</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
