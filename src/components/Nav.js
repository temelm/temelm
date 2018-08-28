import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = (props) => {
  return (
    <nav className='navbar'>
      <div className='wrapper'>
        <div className='navbar-hamburger'>
          <a href='#' onClick={props.handleHamburgerToggle}>
            <FontAwesomeIcon icon='bars' />
          </a>
        </div>
        <div className={['navbar-links', ((props.hamburgerToggle) ? ' expanded' : '')].join('')}>
          <ul>
            <li>
              <AnchorLink href='#portfolio'>Portfolio</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#contact'>Contact</AnchorLink>
            </li>
            <li>
              <a href='cv.pdf' target='_blank'>CV</a>
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
