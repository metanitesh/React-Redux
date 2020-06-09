import React, { Component } from 'react'
import {connect} from 'react-redux';
import handleInitialData from '../actions/shared'
import Dashboard from './dashboard'
import { tweets } from '../reducers/tweets';
import LoadingBar from 'react-redux-loading'
import { Fragment } from 'react/cjs/react.production.min';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        < LoadingBar />
      <div>
        {
          this.props.auth
          ? <Dashboard />
          : ''
        }
        
      </div>
      </Fragment>
    )
  }
}

const mapStateToProp = ({auth}) => ({
  auth,
})

export default connect(mapStateToProp)(App);