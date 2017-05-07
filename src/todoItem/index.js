import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  render () {
    return (
      <div className='view'>
        <input className='toggle' type='checkbox' />
        <label>{this.props.value}</label>
        <button className='destroy' />
      </div>
    )
  }
}

TodoItem.propTypes = {
  id: PropTypes.numeric,
  value: PropTypes.string
};
