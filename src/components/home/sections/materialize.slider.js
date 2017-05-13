'use strict'
import $ from 'jquery'
import '../../../../node_modules/materialize-css/dist/js/materialize.js'

export default () => {
  $(document).ready(function () {
    console.log('Activando slider')
    console.log($('.slider'))
    $('.slider').slider()
    console.log('Activado slider')
  })
}
