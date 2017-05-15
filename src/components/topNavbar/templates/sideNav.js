'use strict'
import yo from 'yo-yo'
import {Links, Items} from '../../navigation'

const sideNav = yo`
<ul class="side-nav" id="mobile-demo">
  <li id="link-alenta"><a class='dropdown-button' href='#' data-activates='dropdown2'>${Items.item1} <i class="material-icons">arrow_drop_down</i></a></li>
  <li class="waves-effect waves-blue" id="link-seccion-sidenav"><a href=${Links.link1}>${Items.item1}</a></li>
  <li class="divider"></li>
  <li><a href=${Links.link2}>${Items.item2}</a></li>
  <li class="divider"></li>
  <li><a href=${Links.link3}>${Items.item3}</a></li>
  <li class="divider"></li>
  <li><a href=${Links.link4}>${Items.item4}</a></li>
  <li class="divider"></li>
  <li><a href=${Links.link5}>${Items.item5}</a></li>
  <li class="divider"></li>
  <li><a href=${Links.link6}>${Items.item6}</a></li>
  <li class="divider"></li>
</ul>
`
module.exports = sideNav
