'use strict'
import {$app} from '../layout/app'
import Common from './Common'
import hideViews from './hideViews'
import {Title} from '../navigation'

const showView1 = () => {
  hideViews()
  Common()

  $app.find('#seccion-showView1').show('slow')
  $app.find('#li-showView1').addClass('activado')
  document.title = `${Title.view1}`
}

module.exports = showView1
