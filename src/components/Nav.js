import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = (props) => {
  const { hamburgerToggle, setHamburgerToggle, handleHamburgerToggle } = props
  return (
    <nav className='navbar'>
      <div className='wrapper'>
        <div className='navbar-hamburger'>
          <a href='#' onClick={handleHamburgerToggle}>
            <FontAwesomeIcon icon='bars' />
          </a>
        </div>
        <div className={['navbar-links', (hamburgerToggle ? ' expanded' : '')].join('')}>
          <ul>
            <li>
              <AnchorLink href='#portfolio' onClick={() => { setHamburgerToggle(false) }}>Portfolio</AnchorLink>
            </li>
            <li>
              <AnchorLink href='#contact' onClick={() => { setHamburgerToggle(false) }}>Contact</AnchorLink>
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
