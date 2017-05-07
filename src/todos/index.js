import React, { Component } from 'react'
import TodoItem from '../todoItem/index'

export default class Todos extends Component {
  getInitialState () {
    return {
      todos: [{id: 1, value: 'test'}]
    }
  }
  render () {
    return (
      <ul className='todo-list'>
        {this.state.todos.map(todo => <TodoItem {...todo}/>)}
      </ul>
    )
  }
}
