const SET_AUTH = 'SET_AUTH';

export const setAuthUser = (id) => {
  return {
    type: SET_AUTH,
    id
  }
}