import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingInput extends Component {

  static propTypes = {
    addItem : PropTypes.func.isRequired
  }

  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  addItem = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.value)
  };

  render() {
    return (
      <div>
        <h2>Shopping List</h2>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
      </div>
    );
  }
}

export default ShoppingInput;