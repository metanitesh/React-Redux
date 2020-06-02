import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListUser from './ListUser';
import AddUser from './AddUser';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state = {
    users : [{
      firstName: "Nitesh",
      lastName: "Sharma",
      username: "nitneverlost",
      gamePlayed:2
    }],
    error: null
  }

  addUser = (newUser) => {
    const checkUser = this.state.users.filter( user =>  user.username === newUser.username );
    if(checkUser.length !== 0) {
      this.setState( {
        error: "user present"
      })
    }else{
      this.setState((prev) => {
        return {
          users : [...prev.users, newUser],
          error: null
        }
      })
    }

    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        { this.state.error && <div> Error: {this.state.error}</div> }
        {/* <AddUser /> */}
        
        <AddUser addUser={this.addUser}/>
        <ListUser users={this.state.users} />
      </div>
    );
  }
}

export default App;
