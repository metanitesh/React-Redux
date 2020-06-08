const RECEIVE_TWEETS = "RECEIVE_TWEETS"

export const receiveTweets = function(tweets){
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}