import React from 'react'

const ContactForm = (props) => {
  return (
    <div className='contact-form'>
      <form action='mail.php' method='post' onSubmit={props.handleContactFormSubmit}>
        <div className='form-field'>
          <input type='text' name='name' id='name' placeholder='Your name' required />
        </div>
        <div className='form-field'>
          <input type='email' name='email' id='email' placeholder='Your email' required />
        </div>
        <div className='form-field'>
          <textarea name='message' id='message' rows='8' placeholder='Your message' required></textarea>
        </div>
        <div className='form-submit'>
          <button type='send' id='send' disabled={props.contactFormSubmitDisabled}>Send</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
