import React from 'react'
import Nav from './Nav'
import Hello from './Hello'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Notification from './Notification'

import portfolioData from './portfolio-data'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'hamburgerToggle': false,
      'contactFormSubmitDisabled': false,
      'displayNotification': false,
      'notificationType': '',
      'notificationMessage': ''
    }
    this.handleHamburgerToggle = this.handleHamburgerToggle.bind(this)
    this.handleContactFormSubmit = this.handleContactFormSubmit.bind(this)
  }

  handleHamburgerToggle (event) {
    event.preventDefault()
    this.setState((prevState) => ({
      'hamburgerToggle': !prevState.hamburgerToggle
    }))
  }

  handleContactFormSubmit (event) {
    event.preventDefault()
    this.setState({
      'contactFormSubmitDisabled': true
    })
    const contactForm = event.target
    fetch('mail.php', {
      'method': 'post',
      'body': new FormData(contactForm)
    }).then((response) => response.text()).then((text) => {
      if (text === 'success') {
        contactForm.reset()
        this.setState({
          'displayNotification': true,
          'notificationType': 'success',
          'notificationMessage': 'Sent.'
        })
      } else {
        this.setState({
          'displayNotification': true,
          'notificationType': 'error',
          'notificationMessage': 'Your message was not sent. Please try again.'
        })
      }
      setTimeout(() => {
        this.setState({
          'contactFormSubmitDisabled': false
        })
      }, 1000)
      setTimeout(() => {
        this.setState({
          'displayNotification': false,
          'notificationType': '',
          'notificationMessage': ''
        })
      }, 8000)
    }).catch((error) => {
      console.error(error)
    })
  }

  render () {
    const { hamburgerToggle, contactFormSubmitDisabled, displayNotification, notificationType, notificationMessage } = this.state
    return (
      <div id='app'>
        <Nav hamburgerToggle={hamburgerToggle} handleHamburgerToggle={this.handleHamburgerToggle} />
        <Hello />
        <Portfolio portfolioData={portfolioData} />
        <Contact
          contactFormSubmitDisabled={contactFormSubmitDisabled}
          handleContactFormSubmit={this.handleContactFormSubmit}
        />
        {displayNotification && <Notification type={notificationType} message={notificationMessage} />}
      </div>
    )
  }
}

export default App
