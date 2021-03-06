import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../actions/tweets'

export const tweets = (state = {}, action) => {
  switch(action.type){
    case (RECEIVE_TWEETS):
      return action.tweets
    case TOGGLE_TWEET :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked === true
                ? state[action.id].likes.filter((uid) => uid !== action.auth)
                : state[action.id].likes.concat([action.auth])
              }
            }
      
    default:
      return state;

  }
}