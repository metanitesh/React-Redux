import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = Redux.createStore(Redux.combineReducers({
  todos, 
  goals,
  loading
}), Redux.applyMiddleware( ReduxThunk.default, checker, logger));
console.log(store.getState());


ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <ConnectedApp />
  </ReactRedux.Provider>
  , document.getElementById("app"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
