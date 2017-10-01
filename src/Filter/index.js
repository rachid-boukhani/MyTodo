import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Filter extends Component {
  render () {
    const {handleFilter, filter} = this.props
    return (
      <div>
      {['All', 'Completed', 'Active'].map((f, i) => {
        if(f === filter ) {
          return (<span key={i}>{f}</span>)
        } else {
          return (<a key={i} href="#" style={{margin: 20}} onClick={(e) => {
            e.preventDefault()
            handleFilter(f)
          }}>
            {f}
          </a>)
        }
      }
      )}
      </div>
    )
  }
}

Filter.propTypes = {
  handleFilter: PropTypes.func,
  filter: PropTypes.string,
}

const mapStateToProps = (state) => ({
  filter: state.filter
})
const mapDispatchToProps = (dispatch) => ({
  handleFilter: (filter)=>{dispatch({type: 'UPDATE_FILTER', filter})}
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
