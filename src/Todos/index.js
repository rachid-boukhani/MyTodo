import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem'

const applyFiletr = (todos, filter) => {
  switch (filter) {
    case 'All':
      return todos
    case 'Completed':
      return todos.filter(todo => todo.completed)
    case 'Active':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

export default class Todos extends Component {
  render () {
    const todos = applyFiletr(this.props.todos, this.props.filter)
    return (
      <ul className='todo-list'>
        {todos.map(todo =>
          <TodoItem key={todo.id} {...todo} handleComplete={this.props.handleComplete} handleRemove={this.props.handleRemove} />
        )}
      </ul>
    )
  }
}

Todos.propTypes = {
  filter: PropTypes.string,
  todos: PropTypes.array,
  handleComplete: PropTypes.func,
  handleRemove: PropTypes.func
}
