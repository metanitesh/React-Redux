import {combineReducers} from 'redux';
import {tweets} from './tweets'
import {users} from './users'
import auth from './auth'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({tweets, users, auth, loadingBar: loadingBarReducer,});