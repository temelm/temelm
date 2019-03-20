import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
  faAngular, faCss3Alt, faGithub, faHtml5, faLinkedinIn, faJs, faPhp, faReact
} from '@fortawesome/free-brands-svg-icons'
import App from './components/App'

library.add(faBars, faAngular, faCss3Alt, faGithub, faHtml5, faLinkedinIn, faJs, faPhp, faReact)

ReactDOM.render(<App />, document.getElementById('root'))
