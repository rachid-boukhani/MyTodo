import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {

  render () {
    const {id, value, completed, handleComplete, handleRemove} = this.props
    return (
      <div>
        <input type='checkbox' onChange={() => handleComplete(id)} />
        <label style={{ textDecoration: completed ? 'line-through' : 'none' }}>{value}</label>
        <button onClick={() => handleRemove(id)} >remove</button>
      </div>
    )
  }
}

TodoItem.propTypes = {
  id: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}
