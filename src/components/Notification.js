import React from 'react'

const Notification = (props) => {
  return (
    <div className={`notification notification-${props.type}`}>
      <div className='wrapper'>
        {props.message}
      </div>
    </div>
  )
}

export default Notification
