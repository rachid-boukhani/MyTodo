import React, { Component }  from 'react'
import TodoInput from './TodoInput'
import Todos from './Todos'
import Filter from './Filter'


export default class App extends Component {

  constructor () {
    super()
    this.state = {
      filter: 'All',
      todos: [],

      handleAdd: (value) => {
        this.setState(prevState => ({
          todos: [...prevState.todos, {id: prevState.todos.length    + 1, value: value, completed: false}]
        }))
      },
      handleComplete: (id) => {
        this.setState((prevState) => ({
          todos: prevState.todos.map(todo => {
            return Object.assign({}, todo, {completed: todo.id === id ? !todo.completed : todo.completed})
          })
        }))
      },
      handleRemove: (id) => {
        this.setState((prevState) => ({
          todos: prevState.todos.filter(todo => todo.id !== id)
        }))
      },

      handleFilter: (filter) => {
        this.setState({filter})
      }
    }
  }

  render () {
    return (
      <div>
        <TodoInput handleAdd={this.state.handleAdd} />
        <Todos {...this.state}/>
        <Filter handleFilter={this.state.handleFilter} filter={this.state.filter} />
      </div>
    )
  }
}
