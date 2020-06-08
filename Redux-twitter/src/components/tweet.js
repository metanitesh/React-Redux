import React, { Component } from 'react'
import {connect} from 'react-redux'
import {formatTweet, formatDate} from './../utils/helpers'
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline} from 'react-icons/ti/index'

 

class Tweet extends Component {
  handleLike = (e) => {
    e.preventDefault()

    // todo: Handle Like Tweet
  }
  toParent = (e, id) => {
    e.preventDefault()
    // todo: Redirect to parent Tweet.
  }

  render() {
    const {tweet, auth} = this.props;

    if(tweet === null){
      return <h3> Tweet does not exist </h3>
    } 

    const {name, avatar, timestamp, text, hasLiked, likes, replies, id, parent} = tweet;
 
    return (
      <div className='tweet'>
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div className='tweet-info'>
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button className='replying-to' onClick={(e) => this.toParent(e, parent.id)}>
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className='tweet-icons'>
            <TiArrowBackOutline className='tweet-icon' />
            <span>{replies !== 0 && replies}</span>
            <button className='heart-button' onClick={this.handleLike}>
              {hasLiked === true
                ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
                : <TiHeartOutline className='tweet-icon'/>}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    )
  }
}

function mapsStateToProp({tweets, auth, users}, {id}){
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null
  
  return {
        auth, 
        tweet : tweet ? formatTweet(tweet, users[tweet.author], auth, parentTweet): null
      } 
}

export default connect(mapsStateToProp)(Tweet)