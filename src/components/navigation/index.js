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
  item1: 'Qué es Alenta',
  item2: 'Consultorios',
  item3: 'Áreas Médicas',
  item4: 'Salas de Cirugía',
  item5: 'Hotel',
  item6: 'Contactenos'
}

const Links = {
  link1: baseUri,
  link2: baseUri + 'consultorios',
  link3: baseUri + 'areas-medicas',
  link4: baseUri + 'cirugia',
  link5: baseUri + 'hotel',
  link6: baseUri + 'contactenos'
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
