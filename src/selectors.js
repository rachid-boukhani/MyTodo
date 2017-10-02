import { createSelector } from 'reselect'

const getFilter = (state) => state.filter
const getTodos = (state) => state.todos

export const getVisibleTodos = createSelector(
  [ getTodos, getFilter ],
  (todos, filter) => {

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
)
