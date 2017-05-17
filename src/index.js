'use strict'
global.jQuery = require('jquery')
require('jquery-ui-dist/jquery-ui')
import WebFont from './scripts/Webfont'
import createNavbar from './components/layout/createNavbar'
import createMain from './components/layout/createMain'
import createFooter from './components/layout/createFooter'
import createLoader from './components/layout/createLoader'
import topNavbar from './components/topNavbar'
import Home from './views/home'
import View1 from './views/view1'
import View2 from './views/view2'
import View3 from './views/view3'
import View4 from './views/view4'
import View5 from './views/view5'
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
    Home()
    View1()
    View2()
    View3()
    View4()
    View5()
    createFooter()
    Footer()
    Navigation()
  }
})()
