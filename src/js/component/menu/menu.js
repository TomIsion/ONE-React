import React, { Component, PropTypes } from 'react'

import TopMenu from './topMenu/topMenu'
import Search from './search/search'
import HoverGlobal from './hoverGlobal/hoverGlobal'
import SideMenu from './sideMenu/sideMenu'

class Menu extends Component {
  state = {
    searchShowSingle: false,
    sideShowSingle: false,
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleGlobalChangeUI.bind(this))
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleGlobalChangeUI.bind(this))
  }

  handleGlobalChangeUI(e) {
    if (this.searchDOMRef.contains(e.target)) {
      // 表示是在搜索区域内点击
    } else {
      this.setState({
        searchShowSingle: false,
      })
    }

    if (this.sideMenuDOMRef.contains(e.target)) {
      // 表示是在侧边菜单内点击
    } else {
      this.setState({
        sideShowSingle: false,
      })
    }
  }

  showSearch() {
    this.setState({
      searchShowSingle: true,
    })
  }

  closeSearch() {
    this.setState({
      searchShowSingle: false,
    })
  }

  showSideMenu() {
    this.setState({
      sideShowSingle: true,
    })
  }

  render() {
    const { searchShowSingle, sideShowSingle } = this.state

    return (
      <div className={this.props.className}>
        <TopMenu
          handleShowSearch={() => this.showSearch()}
          handleShowSideMenu={() => this.showSideMenu()}
        />
        <Search
          showSingle={searchShowSingle}
          handleCloseSearch={() => this.closeSearch()}
          getRef={ref => { this.searchDOMRef = ref }}
        />
        <HoverGlobal
          showSingle={searchShowSingle || sideShowSingle}
          singleFrom={searchShowSingle ? 'search' : 'side'}
        />
        <SideMenu
          showSingle={sideShowSingle}
          getRef={ref => { this.sideMenuDOMRef = ref }}
        />
      </div>
    )
  }
}

Menu.PropTypes = {
  className: PropTypes.string.isRequired,
}

export default Menu
