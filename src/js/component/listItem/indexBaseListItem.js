import React, { Component, PropTypes } from 'react'

import objCln from './indexBaseListItem.scss'

class IndexBaseItem extends Component {
  render() {
    const { title, forward, userName } = this.props

    return (
      <article className={objCln.baseItem}>
        <header>
          <h4 className={'overflow-2'}>{ title }</h4>
          <p className={objCln.author}>作者 / { userName }</p>
        </header>
        <main>
          <p className={'overflow-3'}>{forward}</p>
        </main>
      </article>
    )
  }
}

IndexBaseItem.propTypes = {
  title: PropTypes.string.isRequired,
  forward: PropTypes.string.isRequired,
  // content_type: PropTypes.string.isRequired,
  // item_id: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
}

export default IndexBaseItem
