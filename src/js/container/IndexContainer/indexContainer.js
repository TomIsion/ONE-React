import React, { Component, PropTypes } from 'react'
import 'whatwg-fetch'

import TopFullResource from '../../component/topFullResource/topFullResource'
import IndexListResources from '../../component/indexListResources/indexListResources'

import { indexArrRecentResourceIds, indexObjRescourceById } from 'utils/commonUrl'

const fetch = window.fetch

const getIndexDetail = json => {
  const currentResourceListId = json.data[0]

  return fetch(indexObjRescourceById(currentResourceListId))
            .then(res => res.json())
}

class IndexContainer extends Component {
  state = {
    time: undefined,
    objFullInfo: {},
    arrAfterListInfo: [],
  }

  componentDidMount() {
    // @todos
    // 这里需要加入 Loading

    // 获取首页的资源列表
    fetch(indexArrRecentResourceIds)
      .then(res => res.json())
      .then(json => getIndexDetail(json))
      .then(json => {
        // 先获取时间相关
        // 再获取数据相关
        const arrContentList = json.data.content_list
        const arrAfterListInfo = arrContentList.slice(1)

        this.setState({
          time: json.data.date,
          objFullInfo: arrContentList[0],
          arrAfterListInfo,
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { time, objFullInfo, arrAfterListInfo } = this.state

    return (
      <div className={this.props.className}>
        <TopFullResource
          objSource={objFullInfo}
        />
        <IndexListResources
          arrAfterListInfo={arrAfterListInfo}
        />
      </div>
    )
  }
}

IndexContainer.propTypes = {
  className: PropTypes.string.isRequired,
}

export default IndexContainer
