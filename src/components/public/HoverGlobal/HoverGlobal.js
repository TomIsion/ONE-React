import React, { PropTypes } from 'react'
import cln from 'classnames'

import objCln from './hover.scss'

const Hover = props =>
  <div
    className={cln({
      [objCln.hover]: true,
      chosen: props.showSingle,
      [props.appendCln]: !!props.appendCln,
    })}
    style={props.appendStyle}
  />

Hover.defaultProps = {
  appendStyle: {},
  appendCln: '',
}

Hover.propTypes = {
  showSingle: PropTypes.bool.isRequired,
  appendStyle: PropTypes.object,
  appendCln: PropTypes.string,
}

export default Hover
