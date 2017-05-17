'use strict'
import {$app} from '../layout/app'
import hideViews from './hideViews'
import {Title} from '../navigation'

const showHome = () => {
  hideViews()
  $app.find('#navbar-top').show('slow')
  $app.find('#link-home').show()
  $app.find('#link-alenta').show()
  $app.find('#sliderHome').show('slow')
  $app.find('#home').show('slow')
  document.title = `${Title.home}`
}
module.exports = showHome
