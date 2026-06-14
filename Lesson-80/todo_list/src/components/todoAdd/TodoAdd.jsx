 import React, { Component } from 'react'

export default class TodoAdd extends Component {
  render() {
    return (
      <div className='d-flex'>
        <input type='text' className='form-control' placeholder='Add new todo'/>
        <button className='btn btn-info'>Add</button>
      </div>
    )
  }
}
