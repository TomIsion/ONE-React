import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import cln from 'classnames'

import objCln from './SideMenu.scss'

class SideMenu extends Component {
  render() {
    const { showSingle, getRef } = this.props

    return (
      <aside
        className={cln({
          [objCln.sideMenu]: true,
          chosen: showSingle,
        })}
        ref={getRef}
      >
        <ul>
          <Link to="/one">
            <li>图文</li>
          </Link>
          <Link to="/article">
            <li>阅读</li>
          </Link>
          <Link to="/music">
            <li>音乐</li>
          </Link>
          <Link to="/movie">
            <li>影视</li>
          </Link>
          <Link to="/apps">
            <li>App 下载</li>
          </Link>
          <Link to="/about">
            <li>关于</li>
          </Link>
        </ul>
      </aside>
    )
  }
}

SideMenu.propTypes = {
  showSingle: PropTypes.bool.isRequired,
  getRef: PropTypes.func.isRequired,
}

export default SideMenu
