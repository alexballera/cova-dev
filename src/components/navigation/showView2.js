'use strict'
import {$app} from '../layout/app'
// import Common from './Common'
import hideViews from './hideViews'
import {Title} from '../navigation'

const showView2 = () => {
  hideViews()
  // Common()

  $app.find('#seccion-showView2').show('fade', 1000)
  $app.find('#li-showView2').addClass('activado')
  document.title = `${Title.view2}`
}

module.exports = showView2
