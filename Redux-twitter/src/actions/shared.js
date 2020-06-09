import {getInitialData} from '../utils/api';
import {receiveTweets} from './tweets';
import {receiveUsers} from './users';
import {setAuthUser} from './auth';
import { showLoading, hideLoading } from 'react-redux-loading'
const AUTH_ID = 'sarah_edo';


export default function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({users, tweets}) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthUser(AUTH_ID));
      dispatch(hideLoading())
    })
  }
}