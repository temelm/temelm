import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Tech = (props) => {
  const techName = props.name
  const className = techName.toLowerCase()
  let iconName = ''
  switch (className) {
    case 'angular':
      iconName = 'angular'
      break
    case 'css':
      iconName = 'css3-alt'
      break
    case 'html':
      iconName = 'html5'
      break
    case 'javascript':
      iconName = 'js'
      break
    case 'php':
      iconName = 'php'
      break
    case 'react':
      iconName = 'react'
      break
  }
  return (
    <div className='tech'>
      <FontAwesomeIcon icon={['fab', iconName]} fixedWidth size='lg' className={`tech-${className}`} />
      {techName}
    </div>
  )
}

export default Tech
