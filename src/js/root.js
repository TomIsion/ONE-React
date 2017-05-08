import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router-dom'

import TopMenu from './component/topMenu/topMenu'
import SideMenu from './component/sideMenu/sideMenu'
import Hover from './component/hover/hover'

import IndexContainer from './container/IndexContainer/indexContainer'

import objCln from './root.scss'

class Root extends Component {
  state={
    pageTitle: '一个',
    singleShowHeaderSearch: false,
    singleShowSideMenu: false,
  }

  changeTitleHandler(pageTitle) {
    this.setState({
      pageTitle,
    })
  }

  render() {
    const {
      pageTitle,
      singleShowHeaderSearch,
    } = this.state

    const handleCloseSearch = () => {
      this.setState({
        singleShowHeaderSearch: false,
      })
    }

    return (
      <div className={objCln.root}>
        <Route
          path="/"
          render={props =>
            <TopMenu
              title={pageTitle}
              singleShowHeaderSearch={singleShowHeaderSearch}
              handleCloseSearch={handleCloseSearch}
              {...props}
            />
          }
        />
        <Route
          path="/"
          component={SideMenu}
        />
        <Route
          path="/"
          component={Hover}
        />
        <IndexContainer className={objCln.main} />
      </div>
    )
  }
}

Root.propTypes = {

}

export default Root
