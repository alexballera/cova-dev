'use strict'
import {$app} from '../layout/app'
import hideViews from './hideViews'
import {Title} from '../navigation'

const showHome = () => {
  hideViews()
  // $app.find('#navbar-top').show('fade')
  // $app.find('#link-home').show()
  // $app.find('#link-alenta').show()
  $app.find('#sliderHome').show('fade', 1000)
  $app.find('#home').show('fade', 1000)
  document.title = `${Title.home}`
}
module.exports = showHome
