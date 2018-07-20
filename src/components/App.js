import React from 'react'
import Nav from './Nav'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'hamburgerToggle': false
    }
    this.handleHamburgerToggle = this.handleHamburgerToggle.bind(this)
  }

  handleHamburgerToggle () {
    this.setState((prevState) => ({
      'hamburgerToggle': !prevState.hamburgerToggle
    }))
  }

  render () {
    const { hamburgerToggle } = this.state
    return (
      <div id='app'>
        <Nav hamburgerToggle={hamburgerToggle} handleHamburgerToggle={this.handleHamburgerToggle} />
      </div>
    )
  }
}

export default App
