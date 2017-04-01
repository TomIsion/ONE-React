import React, { Component, PropTypes } from 'react'
// import { today } from 'utils/moment'

import Icon from '../icons/icon'

import objCln from './topFullResource.scss'

class TopFullResource extends Component {
  componentDidMount() {
  }

  render() {
    const { innerWidth, innerHeight } = window

    const { img_url, volume, forward, item_id } = this.props.objSource

    const objStyle = {
      width: innerWidth,
      height: innerHeight,
      backgroundImage: `url(${img_url})`,
    }

    return (
      <div
        className={objCln.topResource}
        style={objStyle}
      >
        <div
          className={objCln.hoverBg}
        >
          <div
            className={objCln.infoContainer}
          >
            <span>29</span><br />
            <p>{volume} 丨 Mar.2017</p>
            <p
              className="overflow-3"
            >{forward}</p>
            <Icon
              cln="moreunfold"
              clnContainer={objCln.icon}
            />
          </div>
        </div>
      </div>
    )
  }
}

TopFullResource.PropTypes = {
  objSource: PropTypes.object.isRequired,
}

export default TopFullResource

