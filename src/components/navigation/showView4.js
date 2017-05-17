'use strict'
import {$app} from '../layout/app'
import Common from './Common'
import hideViews from './hideViews'
import {Title} from '../navigation'

const showView4 = () => {
  hideViews()
  Common()

  $app.find('#seccion-showView4').show('slow')
  $app.find('#li-showView4').addClass('activado')
  document.title = `${Title.view1}`
}

module.exports = showView4
