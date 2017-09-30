import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Filter extends Component {
  render () {
    const {handleFilter, filter} = this.props
    return (
      <div>
      {['All', 'Completed', 'Active'].map((f, i) => {
        if(f === filter ) {
          return (<span key={i}>{f}</span>)
        } else {
          return (<a key={i} href="#" style={{margin: 20}} onClick={(e) => {
            e.preventDefault()
            handleFilter(f)
          }}>
            {f}
          </a>)
        }
      }
      )}
      </div>
    )
  }
}

Filter.propTypes = {
  handleFilter: PropTypes.func,
  filter: PropTypes.string,
}
