import React from 'react';
import PropTypes from 'prop-types'
import Message from './Message';


export default function MessageList(props) {
  return (
    <ul className="message-list">
        {props.messages.map((message, index) => (
          <Message key={index} username={props.username} message={message} />          
        ))}
      </ul>
  );
}

MessageList.prototype = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired
}
