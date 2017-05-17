'use strict'

import hideViews from './hideViews'
import initHome from './initHome'
import showHome from './showHome'
import showView1 from './showView1'
import showView2 from './showView2'
import showView3 from './showView3'
import showView4 from './showView4'
import showView5 from './showView5'
import page from 'page'

const baseUri = '/'

const Items = {
  item1: 'Home',
  item2: 'View 1',
  item3: 'View 2',
  item4: 'View 3',
  item5: 'View 4',
  item6: 'View 5'
}

const Title = {
  home: 'Home',
  view1: 'View 1',
  view2: 'View 2',
  view3: 'View 3',
  view4: 'View 4',
  view5: 'View 5'
}

const Links = {
  link1: baseUri,
  link2: baseUri + 'view-1',
  link3: baseUri + 'view-2',
  link4: baseUri + 'view-3',
  link5: baseUri + 'view-4',
  link6: baseUri + 'view-5'
}

const Navigation = () => {
  hideViews()
  initHome()
  page(Links.link1, showHome)
  page(Links.link2, showView1)
  page(Links.link3, showView2)
  page(Links.link4, showView3)
  page(Links.link5, showView4)
  page(Links.link6, showView5)
  page()
}

export {Navigation, Links, Items, Title}
