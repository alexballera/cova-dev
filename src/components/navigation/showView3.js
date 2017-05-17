'use strict'
import {$app} from '../layout/app'
// import Common from './Common'
import hideViews from './hideViews'
import {Title} from '../navigation'

const showView3 = () => {
  hideViews()
  // Common()

  $app.find('#seccion-showView3').show('fade', 1000)
  $app.find('#li-showView3').addClass('activado')
  document.title = `${Title.view1}`
}

module.exports = showView3
