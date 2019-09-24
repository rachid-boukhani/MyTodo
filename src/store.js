import {createStore, combineReducers} from 'redux'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id: state.length + 1, value: action.value, completed: false}]
    case 'TOGGLE_TODO':
      // TODO: no need to use Object.assign if todo.id !== action.id
      return state.map(todo => Object.assign({}, todo, {completed: todo.id === action.id ? !todo.completed : todo.completed}))
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

const filter = (state = 'All', action) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return action.filter
    default:
      return state
  }
}
const todoApp = combineReducers({todos, filter})

const store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
