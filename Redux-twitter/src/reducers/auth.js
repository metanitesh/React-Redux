const SET_AUTH = 'SET_AUTH';

const auth = (state = null, action) => {
  switch (action.type) {
    case SET_AUTH:
      return action.id
    default:
      return state
  }
}

export default auth;