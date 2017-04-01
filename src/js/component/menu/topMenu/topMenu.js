import React, { Component, PropTypes } from 'react'

import Icon from '../../icons/icon'

import objCln from './topMenu.scss'

class TopMenu extends Component {
  handleSearchClick() {
    this.props.handleShowSearch()
  }

  handleShowSideMenu() {
    this.props.handleShowSideMenu()
  }

  render() {
    return (
      <div
        className={objCln.topMenu}
      >
        <Icon
          cln="category"
          clnContainer={objCln.iconMenu}
          clickHandler={() => this.handleShowSideMenu()}
        />
        <Icon
          cln="search"
          clnContainer={objCln.iconSearch}
          clickHandler={() => this.handleSearchClick()}
        />
        <h1>一个</h1>
      </div>
    )
  }
}

TopMenu.PropTypes = {
  handleShowSearch: PropTypes.func.isRequired,
  handleShowSideMenu: PropTypes.func.isRequired,
}

export default TopMenu
