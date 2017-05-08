import React, { Component, PropTypes } from 'react'

import Icon from '../Icons/Icon'

import objCln from './TopTitle.scss'

class TopMenu extends Component {
  render() {
    const {
      handleShowSearch,
      handleShowSideMenu,
      title,
    } = this.props

    return (
      <div
        className={objCln.topTitle}
      >
        <Icon
          cln="category"
          clnContainer={objCln.iconMenu}
          clickHandler={handleShowSideMenu}
        />
        <Icon
          cln="search"
          clnContainer={objCln.iconSearch}
          clickHandler={handleShowSearch}
        />
        <h1>{title}</h1>
      </div>
    )
  }
}

TopMenu.PropTypes = {
  title: PropTypes.string.isRequired,
  handleShowSearch: PropTypes.func.isRequired,
  handleShowSideMenu: PropTypes.func.isRequired,
}

export default TopMenu
