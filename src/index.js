'use strict'
global.jQuery = require('jquery')
require('jquery-ui-dist/jquery-ui')
import WebFont from './scripts/Webfont'
import createNavbar from './components/layout/createNavbar'
import createMain from './components/layout/createMain'
import createFooter from './components/layout/createFooter'
import createLoader from './components/layout/createLoader'
import topNavbar from './components/topNavbar'
import Views from './views'
import Footer from './components/footer'
import {Navigation} from './components/navigation'
(() => {
  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    WebFont()
    createLoader()
    createNavbar()
    topNavbar()
    createMain()
    Views()
    createFooter()
    Footer()
    Navigation()
  }
})()
