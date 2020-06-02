import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <li>{this.props.user}</li>
    );
  }
}

export default User;