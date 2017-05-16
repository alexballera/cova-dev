'use strict'
import {createHome} from './createHome'
import Section1 from './section1'
import Section2 from './section2'
import loader from '../../components/loader'
import Carousel from '../../components/carousel'

export default () => {
  createHome()
  loader()
  Carousel()
  Section1()
  Section2()
}
