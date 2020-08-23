import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        <div className='contact-social'>
          <div className='social-stack'>
            <div className='social social-github'>
              <a href='//github.com/temelm' target='blank' rel='noopener'>
                <FontAwesomeIcon icon={['fab', 'github']} fixedWidth size='lg' spin />
              </a>
            </div>
            <div className='social social-linkedin'>
              <a href='//www.linkedin.com/in/mustafa-temel-b3908b2a' target='blank' rel='noopener'>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} fixedWidth size='lg' spin />
              </a>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <span role='img' aria-label='Copyright'>©️</span>
          {' '}
          2020 Mustafa Temel
        </div>
      </div>
    </section>
  )
}

export default Contact
