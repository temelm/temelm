import React from 'react'

const Notification = (props) => {
  const { type, message, handleNotificationDismiss } = props
  return (
    <div className={`notification notification-${type}`}>
      <div className='wrapper'>
        {message}
        {' '}
        <a href='#' onClick={handleNotificationDismiss}>Dismiss</a>
      </div>
    </div>
  )
}

export default Notification
