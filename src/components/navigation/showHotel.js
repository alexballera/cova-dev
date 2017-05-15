'use strict'
import {$app} from '../layout/app'
import Common from './Common'
import hideViews from './hideViews'

const onClickShowHotel = () => {
  hideViews()
  Common()

  $app.find('#seccion-hotel').show('slow')
  $app.find('#li-hotel').addClass('activado')
  document.title = 'Hotel'
}

module.exports = onClickShowHotel
