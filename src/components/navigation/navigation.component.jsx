'use strict'

// Dependencias
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  Menu,
  Divider,
  Drawer,
  IconButton,
  MenuItem
} from 'material-ui'

// Datos
import data from '../../data/navigation.data'

// Estáticos
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import Logo from '../../static/images/cova-solutions-logo.jpg'
import styles from './styles.jsx'
import './styles.scss'

class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      with: true
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.withoutDropdown = this.withoutDropdown.bind(this)
    this.withDropdown = this.withDropdown.bind(this)
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  handleClose () {
    this.setState({open: false})
  }

  withoutDropdown () {
    this.setState({with: false})
  }

  withDropdown () {
    this.setState({with: true})
  }

  render () {
    return (
      <nav className='navbar'>
        <Menu
          className='navbar-menu'
          style={styles.menu}
          desktop
          onChange={this.withoutDropdown}
          >
          <MenuItem
            primaryText={<IconButton><MenuIcon /></IconButton>}
            onTouchTap={this.handleToggle}
            style={styles.menuItem}
            className='navbar-icon hide-on-large-only'
            />
          <MenuItem
            primaryText={<img src={Logo} />}
            style={styles.menuItem}
            className='navbar-logo'
            containerElement={<NavLink to={data.menu.item1.url} />}
            onClick={this.withDropdown}
            />
          <div className='navbar-desktop hide-on-med-and-down' >
            <MenuItem
              primaryText={data.menu.item1.title}
              style={styles.menuItem}
              containerElement={<Link to={data.menu.item1.url} />}
              onClick={this.withDropdown}
              />
            <MenuItem
              primaryText={data.menu.item2.title}
              onClick={this.withoutDropdown}
              style={styles.menuItem}
              containerElement={<NavLink to={data.menu.item2.url} />}
              />
            <MenuItem
              primaryText={data.menu.item3.title}
              onClick={this.withoutDropdown}
              style={styles.menuItem}
              containerElement={<NavLink to={data.menu.item3.url} />} />
            <MenuItem
              primaryText={data.menu.item4.title}
              onClick={this.withoutDropdown}
              style={styles.menuItem}
              containerElement={<NavLink to={data.menu.item4.url} />} />
          </div>
        </Menu>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          onChange={this.withoutDropdown}
          >
          <MenuItem
            onTouchTap={this.handleClose}
            primaryText={data.menu.item1.title}
            style={styles.menuItem}
            containerElement={<Link to={data.menu.item1.url} />}
            onClick={this.withDropdown}
            />
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            onClick={this.withoutDropdown}
            primaryText={data.menu.item2.title}
            style={styles.menuItem}
            containerElement={<NavLink to={data.menu.item2.url} />}
            />
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            onClick={this.withoutDropdown}
            primaryText={data.menu.item3.title}
            style={styles.menuItem}
            containerElement={<NavLink to={data.menu.item3.url} />}
            />
          <Divider />
          <MenuItem
            onTouchTap={this.handleClose}
            onClick={this.withoutDropdown}
            primaryText={data.menu.item4.title}
            style={styles.menuItem}
            containerElement={<NavLink to={data.menu.item4.url} />}
            />
          <Divider />
        </Drawer>
      </nav>
    )
  }
}
export default Navigation
