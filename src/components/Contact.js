import React from 'react'
import ContactForm from './ContactForm'

const Contact = (props) => {
  const { contactFormSubmitDisabled, handleContactFormSubmit } = props
  return (
    <section id='contact'>
      <div className='wrapper'>
        <h1>Contact</h1>
        <ContactForm
          contactFormSubmitDisabled={contactFormSubmitDisabled}
          handleContactFormSubmit={handleContactFormSubmit}
        />
      </div>
    </section>
  )
}

export default Contact
