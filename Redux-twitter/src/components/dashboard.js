import React, { Component } from 'react'
import {connect} from 'react-redux'
import Tweet from './tweet'

class Dashboard extends Component {
  render() {

    
    return (
      <div>
        {this.props.tweets.map(tweet => {
          return <Tweet key ={tweet} id={tweet} />
        })}    
        
      </div>
    )
  }
}

const mapStateToProp = ({tweets}) => ({
  tweets: Object.keys(tweets)
})

export default connect(mapStateToProp)(Dashboard);