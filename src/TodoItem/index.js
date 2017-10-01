import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  render () {
    const {id, value, completed, handleToggle, handleRemove} = this.props
    return (
      <div>
        <input type='checkbox' onChange={() => handleToggle(id)} />
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
  handleToggle: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default TodoItem
