import React, { Component }  from 'react'
import PropTypes from 'prop-types'
import TodoInput from './TodoInput'
import Todos from './Todos'
import Filter from './Filter'

export default class App extends Component {
  render () {
    return (
      <div>
        <TodoInput/>
        <Todos/>
        <Filter/>
      </div>
    )
  }
}

App.contextTypes = {
  store: PropTypes.object
}
