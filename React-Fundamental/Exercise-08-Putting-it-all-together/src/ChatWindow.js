import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MessageList from './MessageList'
import CreateNewMessage from './CreateNewMessage'

export default class ChatWindow extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired,
    updateMessage: PropTypes.func.isRequired
  }

  
  render() {
    return (
      <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{this.props.username}</div>

      <MessageList username={this.props.username} messages={this.props.messages} />
      <CreateNewMessage username={this.props.username} updateMessage={this.props.updateMessage} />

    </div>
    )
  }
}
