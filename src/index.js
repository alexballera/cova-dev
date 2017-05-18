'use strict'
global.jQuery = require('jquery')
require('jquery-ui-dist/jquery-ui')
import WebFont from './scripts/Webfont'
import Layout from './components/layout'
import topNavbar from './components/topNavbar'
import Views from './views'
import Footer from './components/footer'
import {Navigation} from './components/navigation'
(() => {
  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    WebFont()
    Layout()
    topNavbar()
    Views()
    Footer()
    Navigation()
  }
})()
