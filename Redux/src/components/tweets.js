import React, { Component } from 'react';
import {connect} from 'react-redux'

class tweets extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.tweets)}
      </div>
    );
  }
}

const mapStateToProp = ({tweets}) => {
  return {
    tweets,
  }
}

export default connect(mapStateToProp)(tweets);