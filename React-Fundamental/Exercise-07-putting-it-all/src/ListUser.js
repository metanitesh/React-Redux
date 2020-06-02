import React from 'react'
import PropTypes from 'prop-types'
import User from './user';


export default function ListUser(props) {
  return (
    <ul>
      {props.users.map(user => <User key= {user.username} user ={user}/>)} 
    </ul>
  );
}

ListUser.propTypes = {
  users : PropTypes.array.isRequired
}
