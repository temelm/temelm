import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Tech = (props) => {
  const { name } = props
  const className = name.toLowerCase().replace(/\s/g, '-')
  return (
    <div className='tech'>
      <FontAwesomeIcon icon={['fa', 'layer-group']} fixedWidth size='lg' className={`tech-${className}`} />
      {name}
    </div>
  )
}

export default Tech
