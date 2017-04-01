import React, { Component, PropTypes } from 'react'
import cln from 'classnames'

import objCln from './sideMenu.scss'

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
          <li>图文</li>
          <li>阅读</li>
          <li>音乐</li>
          <li>影视</li>
          <li>App 下载</li>
          <li>关于</li>
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