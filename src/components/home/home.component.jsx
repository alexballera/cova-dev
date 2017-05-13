'use strict'
import React from 'react'
import {Helmet} from 'react-helmet'
import Slider from './sections/slider.jsx'

// Estáticos
import './home.scss'
// import imagen from '../../static/images/disney-logo.jpg'

class Home extends React.Component {
  render () {
    if (this.props.children) {
      return this.props.children
    } else {
      return (
        <div>
          <Helmet
            title={'Practica React Webpack'}
            meta={[
                {'name': 'home description', 'content': 'Home Helmet application'}
            ]}
            />
          <main className='home'>
            <h1>Home</h1>
            <Slider />
          </main>
        </div>
      )
    }
  }
}
module.exports = Home
