import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import Todos from './todos'

class App extends React.Component {
  render () {
    return (
      <div>
        <Todos />
      </div>
    )
  }
}

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))
