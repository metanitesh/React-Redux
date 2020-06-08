import {combineReducers} from 'redux';
import {tweets} from './../reducers/tweets'
import {users} from './../reducers/users'
import auth from './../reducers/auth'

export default combineReducers({tweets, users, auth});