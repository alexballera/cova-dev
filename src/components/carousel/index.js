'use strict'

import yo from 'yo-yo'
import JqueryOptions from './jquery.options'
import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5
} from './slides'

const Slider = yo`
<div id="carousel" class="carousel carousel-slider hide-on-med-and-down">
  ${Slide1}
  ${Slide2}
  ${Slide3}
  ${Slide4}
  ${Slide5}
</div>
`
export default () => {
  const Home = document.getElementById('home')
  Home.appendChild(Slider)
  JqueryOptions()
}
