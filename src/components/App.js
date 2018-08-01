import React from 'react'
import Nav from './Nav'
import Hello from './Hello'
import portfolioData from './portfolio-data'
import Portfolio from './Portfolio'

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
        <Hello />
        <Portfolio portfolioData={portfolioData} />
      </div>
    )
  }
}

export default App
