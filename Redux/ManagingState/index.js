/* eslint-disable no-console */
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

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

const todoReducer = (state = [], event) => {
  switch (event.type) {
    case ADD_TODO:
      return state.concat(event.data);
    case REMOVE_TODO:
      return state.filter((item) => item.name !== event.data.name);
    default:
      return state;
  }
};

const goalReducer = (state = [], event) => {
  switch (event.type) {
    case ADD_GOAL:
      return state.concat(event.data);
    case REMOVE_GOAL:
      return state.filter((item) => item.name !== event.data.name);
    default:
      return state;
  }
};

const indexReducer = (state = {}, event) => ({
  todos: todoReducer(state.todos, event),
  goals: goalReducer(state.goals, event),
});

const store = createStore(indexReducer);
console.log(store.getState());

store.subscribe(() => console.log('hello'));

const addTodoAction = (name) => ({
  type: 'ADD_TODO',
  data: {
    name,
  },
});

const removeTodoAction = (name) => ({
  type: 'REMOVE_TODO',
  data: {
    name,
  },
});

const addGoalAction = (name) => ({
  type: 'ADD_GOAL',
  data: {
    name,
  },
});


const removeGoalAction = (name) => ({
  type: 'REMOVE_GOAL',
  data: {
    name,
  },
});

store.dispatch(addTodoAction('Nitesh'));
store.dispatch(addTodoAction('Lin'));
store.dispatch(addGoalAction('Akhil'));
store.dispatch(removeTodoAction('Nitesh'));
console.log(store.getState());
