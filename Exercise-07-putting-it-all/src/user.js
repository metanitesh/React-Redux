import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  static propTypes = {
    user : PropTypes.object.isRequired
  }

  state = {
    showGame: false
  }

  toggle = ()=>{
    this.setState(prev => ({
      showGame : !prev.showGame
    }))
  }
  render() {
    return (
      <li key={this.props.user.username}> {this.props.user.username} played {this.state.showGame ? this.props.user.gamePlayed : 0} 
      {this.state.showGame 
        ? <button onClick = {this.toggle}>hide game played</button>
        : <button onClick = {this.toggle} >show game played</button>
      }
      
      
      </li>
    );
  }
}

export default User;