import React, { Component } from 'react'
import PropTypes from 'prop-types'

let input
export default class TodoInput extends Component {
  render () {
    const {handleAdd} = this.props
    return (
      <div>
        <input type='text' ref={(node) => input = node} />
        <button onClick={(e) => {
          e.preventDefault()
          handleAdd(input.value)
          input.value = ''
        }} >Add</button>
      </div>
    )
  }
}

TodoInput.propTypes = {
  handleAdd: PropTypes.func
}
