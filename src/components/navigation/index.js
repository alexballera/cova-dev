'use strict'

import hideViews from './hideViews'
import initHome from './initHome'
import showHome from './showHome'
import showConsultorios from './showConsultorios'
import showMedicas from './showMedicas'
import showCirugia from './showCirugias'
import showHotel from './showHotel'
import showContactenos from './showContacto'
import page from 'page'

const baseUri = '/'

const Items = {
  item1: 'Home',
  item2: 'Trabaja en USA',
  item3: 'Crea tu empresa en USA',
  item4: 'Nosotros',
  item5: '',
  item6: ''
}

const Links = {
  link1: baseUri,
  link2: baseUri + 'trabaja-en-usa',
  link3: baseUri + 'crea-tu-empresa',
  link4: baseUri + 'nosotros',
  link5: baseUri + '',
  link6: baseUri + ''
}

const Navigation = () => {
  hideViews()
  initHome()
  page(Links.link1, showHome)
  page(Links.link2, showConsultorios)
  page(Links.link3, showMedicas)
  page(Links.link4, showCirugia)
  page(Links.link5, showHotel)
  page(Links.link6, showContactenos)
  page()
}

export {Navigation, Links, Items}
