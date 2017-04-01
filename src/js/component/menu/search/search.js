import React, { Component, PropTypes } from 'react'
import cln from 'classnames'

import Icon from '../../icons/icon'

import objCln from './search.scss'

class Search extends Component {
  state = {
    val: '',
  }

  handleInputChange(_val) {
    this.setState({
      val: _val.trim(),
    })
  }

  render() {
    return (
      <div
        className={cln({
          [objCln.searchContainer]: true,
          chosen: this.props.showSingle,
        })}
        ref={this.props.getRef}
      >
        <Icon
          cln={'close'}
          clnContainer={objCln.iconClose}
          clickHandler={this.props.handleCloseSearch}
        />
        <Icon
          cln={'search'}
          clnContainer={objCln.icon}
        />
        <form>
          <input
            type="text"
            placeholder="输入作者或者标题关键字"
            onChange={e => this.handleInputChange(e.target.value)}
            value={this.state.val}
          />
        </form>
      </div>
    )
  }
}

Search.propTypes = {
  showSingle: PropTypes.bool.isRequired,
  handleCloseSearch: PropTypes.func.isRequired,
  getRef: PropTypes.func.isRequired,
}

export default Search
