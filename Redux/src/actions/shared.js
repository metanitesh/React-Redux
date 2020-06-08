import {getInitialData} from './../utils/api';
import {receiveTweets} from './tweets';
import {receiveUsers} from './users';
import {setAuthUser} from './auth';
const AUTH_ID = 'sarah_edo';

export default function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
    .then(({users, tweets}) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthUser(AUTH_ID));
    })
  }
}