import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import indexReducer from './reducers'
import indexMiddleWare from './middlewear';

const store = createStore(indexReducer, indexMiddleWare);
window.store = store;

ReactDOM.render(
<Provider store= {store}>
  <App />
</Provider>, document.getElementById('root'))