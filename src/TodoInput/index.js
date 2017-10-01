import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

let input
class TodoInput extends Component {
  render () {
    const {handleAdd} = this.props
    return (
      <div>
        <input type='text' ref={(node) => input = node} />
        <button onClick={(e) => {
          e.preventDefault()
          handleAdd(input.value)
          input.value = ''
        }} >Add</button>
      </div>
    )
  }
}

TodoInput.propTypes = {
  handleAdd: PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
  handleAdd: (value)=>{dispatch({type: 'ADD_TODO', value})}
})

export default connect(null, mapDispatchToProps)(TodoInput)
