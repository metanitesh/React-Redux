import React, { Component } from 'react';
import User from './User';


class Movie extends Component {
  render() {
    return (
      <div>
        <h2> {this.props.movieName}</h2>
        <ul>
          {
          (this.props.users
          ? this.props.users.map(user=> <User user={user}/>)
          : <p> No one liked it</p>
          )
          }
        </ul>
      </div>
    );
  }
}

export default Movie;