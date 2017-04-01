import React, { Component, PropTypes } from 'react'
import IndexBaseListItem from '../listItem/indexBaseListItem'
import Icon from '../icons/icon'

import objCln from './indexListResources.scss'

class IndexListResources extends Component {
  render() {
    const arrAfterListInfo = this.props.arrAfterListInfo

    return (
      <div className={objCln.mainContainer}>
        <ul>
          {
            arrAfterListInfo.map(ele =>
              <IndexBaseListItem
                key={ele.item_id}
                title={ele.title}
                forward={ele.forward}
                userName={ele.author.user_name}
              />,
            )
          }
        </ul>
        <button className={objCln.more}>
          <span>更多内容</span>
          <Icon
            cln={'more'}
            clnContainer={objCln.icon}
          />
        </button>
        <p>
          <img src="//image.wufazhuce.com/beian.png" />
          <span>沪公网安备 31010502000462号</span>
        </p>
      </div>
    )
  }
}

IndexListResources.propTypes = {
  arrAfterListInfo: PropTypes.array.isRequired,
}

export default IndexListResources
