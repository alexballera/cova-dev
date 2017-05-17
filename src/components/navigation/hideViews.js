'use strict'
import {$app} from '../layout/app'

export default () => {
  $app.find('#navbar-top').hide()
  $app.find('#link-seccion').hide()
  $app.find('#link-seccion-sidenav').hide()
  $app.find('#sliderHome').hide()
  $app.find('#home').hide()
  $app.find('#loader').hide()

  // Navegacion:
  $app.find('#seccion-showView1').hide()
  $app.find('#li-showView1').removeClass('activado')

  $app.find('#seccion-showView2').hide()
  $app.find('#li-showView2').removeClass('activado')

  $app.find('#seccion-showView3').hide()
  $app.find('#li-showView3').removeClass('activado')

  $app.find('#seccion-showView4').hide()
  $app.find('#li-showView4').removeClass('activado')

  $app.find('#seccion-showView5').hide()
  $app.find('#li-showView5').removeClass('activado')
}
