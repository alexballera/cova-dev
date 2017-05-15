'use strict'
import {$app} from '../layout/app'
import hideViews from './hideViews'

const showHome = () => {
  hideViews()
  $app.find('#navbar-top').show('slow')
  $app.find('#link-home').show()
  $app.find('#link-alenta').show()
  $app.find('#carousel').show('slow')
  $app.find('#home').show('slow')
  $app.find('#footer').show('slow')
  document.title = 'Alenta primer centro médico ambulatorio de Colombia'
}
module.exports = showHome
