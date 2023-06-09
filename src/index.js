import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ComingSoon from './views/coming-soon'
import Products from './components/products';
import Home from './views/home'
import ContactUs from './components/contactUS'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ComingSoon} exact path="/coming-soon" />
        <Route component={ContactUs} exact path="/contactus" />
        <Route component={Products} exact path="/products" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
