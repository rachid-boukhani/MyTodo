import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { getVisibleTodos } from '../selectors'
import TodoItem from '../TodoItem'


class Todos extends Component {
  render () {
    const todos = this.props.todos
    return (
      <ul className='todo-list'>
        {todos.map(todo =>
          <TodoItem key={todo.id} {...todo} handleToggle={this.props.handleToggle} handleRemove={this.props.handleRemove} />
        )}
      </ul>
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.array,
  handleToggle: PropTypes.func,
  handleRemove: PropTypes.func
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state)
})
const mapDispatchToProps = (dispatch) => ({
  handleToggle: (id)=>{dispatch({type: 'TOGGLE_TODO', id})},
  handleRemove: (id)=>{dispatch({type: 'REMOVE_TODO', id})}
})


export default connect(mapStateToProps, mapDispatchToProps)(Todos)
