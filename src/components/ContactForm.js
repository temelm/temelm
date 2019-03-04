import React from 'react'

const ContactForm = (props) => {
  const { handleContactFormSubmit, contactFormSubmitDisabled } = props
  return (
    <div className='contact-form'>
      <form action='mail.php' method='post' onSubmit={handleContactFormSubmit}>
        <div className='form-field'>
          <input type='text' name='name' id='name' placeholder='Your name' required />
        </div>
        <div className='form-field'>
          <input type='email' name='email' id='email' placeholder='Your email' required />
        </div>
        <div className='form-field'>
          <textarea name='message' id='message' rows='8' placeholder='Your message' required />
        </div>
        <div className='form-submit'>
          <button type='submit' id='send' disabled={contactFormSubmitDisabled}>Send</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
