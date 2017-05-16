'use strict'

import WebFont from './scripts/Webfont'
import createNavbar from './components/layout/createNavbar'
import createMain from './components/layout/createMain'
import createFooter from './components/layout/createFooter'
import createLoader from './components/layout/createLoader'
import topNavbar from './components/topNavbar'
import Home from './views/home'
import Consultorios from './views/consultorios'
import Medicas from './views/medicas'
import Cirugias from './views/cirugias'
import Hotel from './views/hotel'
import Contacto from './views/contactenos'
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
    Consultorios()
    Medicas()
    Cirugias()
    Hotel()
    Contacto()
    createFooter()
    Footer()
    Navigation()
  }
})()
