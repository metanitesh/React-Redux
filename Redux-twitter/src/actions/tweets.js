import { saveLikeToggle } from '../utils/api'

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = 'TOGGLE_TWEET'


export const receiveTweets = function(tweets){
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}

function toggleTweet ({ id, auth, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    auth,
    hasLiked
  }
}

export function handleToggleTweet (info) {
  
  return (dispatch) => {
    dispatch(toggleTweet(info))

    return saveLikeToggle(info)
      .catch((e) => {
        console.warn('Error in handleToggleTweet: ', e)
        dispatch(toggleTweet(info))
        alert('The was an error liking the tweet. Try again.')
      })
  }
}
