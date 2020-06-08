import React, { Component } from 'react'
import {connect} from 'react-redux';
import handleInitialData from '../actions/shared'
import Dashboard from './dashboard'
import { tweets } from '../reducers/tweets';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        {
          this.props.auth
          ? <Dashboard />
          : 'Singin'
        }
        
      </div>
    )
  }
}

const mapStateToProp = ({auth}) => ({
  auth,
})

export default connect(mapStateToProp)(App);