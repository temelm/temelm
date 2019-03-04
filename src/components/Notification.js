import React from 'react'

const Notification = (props) => {
  const { type, message } = props
  return (
    <div className={`notification notification-${type}`}>
      <div className='wrapper'>
        {message}
      </div>
    </div>
  )
}

export default Notification
