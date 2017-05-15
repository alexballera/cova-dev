'use strict'
import {$app} from '../layout/app'
import Common from './Common'
import hideViews from './hideViews'

const showConsultorios = () => {
  hideViews()
  Common()

  $app.find('#seccion-consultorios').show('slow')
  $app.find('#li-consultorios').addClass('activado')
  document.title = 'Consultorios'
}

module.exports = showConsultorios
