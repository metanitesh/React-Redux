import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddUser extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  state ={
    username : "",
    firstName: "",
    lastName: "",
    gamePlayed: 0
  }

  handleChange = (event) => {
    const { name, value } = event.target
    
    this.setState(prev => ({
       [name]: value
     })
     
    )
  }

  addNewItem = (event) => {
    event.preventDefault();
    this.props.addUser(this.state)
  }
  
  isInputEmpty(){
    return this.state.username === "" &&  this.state.firstName === "" && this.state.lastName === "";
  }

  render() {
    return (
      <div>
        <form >
          <input name="username" value={this.state.value} onChange={this.handleChange} placeholder="username"/>
          <br/>
          <input name="firstName" value={this.state.value} onChange={this.handleChange} placeholder="firstName"/>
          <br/>
          <input name="lastName" value={this.state.value} onChange={this.handleChange} placeholder="lastName"/>
          <br />
          <button onClick={this.addNewItem} disabled={this.isInputEmpty()}> Add New </button>
        </form>
      </div>
    )
  }
}
