import React, { PropTypes } from 'react'
import cln from 'classnames'

import objCln from './hoverGlobal.scss'

const HoverGlobal = props =>
  <div
    className={cln({
      [objCln.hoverGlobal]: true,
      chosen: props.showSingle,
    })}
  />

HoverGlobal.propTypes = {
  showSingle: PropTypes.bool.isRequired,
}

export default HoverGlobal

