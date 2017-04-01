import React from 'react'

import objCln from './icon.scss'

const Icon = (props) => {
  const { cln, clnContainer, clickHandler } = props

  return (
    <div
      className={`${clnContainer} ${objCln.icon}`}
      onClick={clickHandler}
    >
      <i
        className={`iconfont-one-react icon-one-${cln}`}
      />
    </div>
  )
}

export default Icon
