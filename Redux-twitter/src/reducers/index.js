import {combineReducers} from 'redux';
import {tweets} from './tweets'
import {users} from './users'
import auth from './auth'

export default combineReducers({tweets, users, auth});