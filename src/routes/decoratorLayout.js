import React, { Component } from 'react'

import TopTitle from 'components/public/TopTitle/TopTitle'
import TopSearch from 'components/public/TopSearch/TopSearch'
import SideMenu from 'components/public/SideMenu/SideMenu'
import HoverGlobal from 'components/public/HoverGlobal/HoverGlobal'

export default InfoContainer => class extends Component {
  state = {
    singleShowSearch: false,
    singleShowSideMenu: false,
  }

  componentDidMount() {
    document.body.addEventListener('click', ::this.handleGlobalTap)
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', ::this.handleGlobalTap)
  }

  showSearch() {
    this.setState({
      singleShowSearch: true,
    })
  }

  closeSearch() {
    this.setState({
      singleShowSearch: false,
    })
  }

  showSideMenu() {
    this.setState({
      singleShowSideMenu: true,
    })
  }

  // 获取 SideMenu DOM 节点
  getSideMenuDOM(domSideMenu) {
    this.domSideMenu = domSideMenu
  }

  // 获取 Search DOM 节点
  getTopSearchDOM(domTopSearch) {
    this.domTopSearch = domTopSearch
  }

  handleGlobalTap(e) {
    if (this.domTopSearch.contains(e.target)) {
      // 表示是在头部搜索框内点击
    } else {
      this.setState({
        singleShowSearch: false,
      })
    }

    if (this.domSideMenu.contains(e.target)) {
      // 表示是在侧边菜单内点击
    } else {
      this.setState({
        singleShowSideMenu: false,
      })
    }
  }

  render() {
    const { singleShowSearch, singleShowSideMenu } = this.state

    return (
      <div>
        <TopTitle
          title="一个"
          handleShowSearch={::this.showSearch}
          handleShowSideMenu={::this.showSideMenu}
        />
        <TopSearch
          showSingle={singleShowSearch}
          handleCloseSearch={::this.closeSearch}
          getRef={::this.getTopSearchDOM}
        />
        <SideMenu
          showSingle={singleShowSideMenu}
          getRef={::this.getSideMenuDOM}
        />
        <HoverGlobal
          showSingle={singleShowSearch}
          appendStyle={{
            backgroundColor: '#fff',
            opacity: '.5',
          }}
        />
        <HoverGlobal
          showSingle={singleShowSideMenu}
          appendStyle={{
            zIndex: 2,
          }}
        />
        <InfoContainer />
      </div>
    )
  }
}
