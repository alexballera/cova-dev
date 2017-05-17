'use strict'
import {$app} from '../layout/app'
// import Common from './Common'
import hideViews from './hideViews'
import {Title} from '../navigation'

const showView5 = () => {
  hideViews()
  // Common()

  $app.find('#seccion-showView5').show('fade', 1000)
  $app.find('#li-showView5').addClass('activado')
  document.title = `${Title.view5}`
}

module.exports = showView5
