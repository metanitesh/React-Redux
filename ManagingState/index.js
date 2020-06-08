/* eslint-disable no-console */
const createStore = (reducer) => {
  let state = [];

  let listeners = [];

  const getState = () => state;

  const subscribe = (fn) => {
    listeners.push(fn);
    return () => {
      listeners = listeners.filter((listener) => listener !== fn);
    };
  };

  const getListener = () => listeners;


  const dispatch = (event) => {
    state = reducer(state, event);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    getListener,
    dispatch,
  };
};
