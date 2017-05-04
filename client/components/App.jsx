import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import DefaultPage from './DefaultPage'
import AboutMe from './AboutMe'
import Blog from './Blog'
import Contact from './Contact'
import WebDesign from './WebDesign'
import GraphicDesign from './GraphicDesign'
import WebDeveloper from './WebDevelopement'

const App = () => (
  <div className='app'>
    <Router>
      <div>
        <Route exact path='/' component={DefaultPage} />
        <Route path='/AboutMe' component={AboutMe} />
        <Route path='/Blog' component={Blog} />
        <Route path='/Contact' component={Contact} />
        <Route path='/WebDesign' component={WebDesign} />
        <Route path='/GraphicDesign' component={GraphicDesign} />
        <Route path='/WebDevelopment' component={WebDeveloper} />

      </div>
    </Router>
  </div>
)

export default App
