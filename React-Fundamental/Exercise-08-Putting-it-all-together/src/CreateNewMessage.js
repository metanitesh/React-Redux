import React, { Component } from 'react';
import PropTypes from 'prop-types'

class CreateNewMessage extends Component {
  static propType = {
    username: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
  }

  state={
    value : ''
  }

  isDisabled = () => {
    return this.state.value === '' ? true : false;
  };

  updateMessage = (event) => {
    
    const {value} = event.target;
    this.setState({
      value
    })
  }

  handleNewMessage = (event) => {
    event.preventDefault();
    this.props.updateMessage({
      username: this.props.username,
      text: this.state.value
    })
  }

  render() {
    return (
      <div>
        <form className="input-group">
          <input type="text" className="form-control"  value={this.state.value} onChange={this.updateMessage} placeholder="Enter your message..." />
          <div className="input-group-append">
            <button className="btn submit-button" onClick={this.handleNewMessage} disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>  
    );
  }
}

export default CreateNewMessage;