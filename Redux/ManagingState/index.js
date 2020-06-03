/* eslint-disable no-console */
const createStore = (reducer) => {
  let state = [{
    name: 'Nitesh',
  }];

  let listeners = [];

  const getState = () => {
    return state;
  };

  const subscribe = (fn) => {
    listeners.push(fn);
    return () => {
      listeners = listeners.filter((listener) => listener !== fn);
    };
  };

  const getListener = () => listeners;


  const dispatch = (event) => {
    state = reducer(state, event);
  };

  return {
    getState,
    subscribe,
    getListener,
    dispatch,
  };
};

const reducer = (state, event) => {
  if (event.type === 'ADD') {
    return state.concat(event.data);
  }
  return state;
};


const store = createStore(reducer);
console.log(store.getState());

store.subscribe(() => console.log('hello'));

const event = {
  type: 'ADD',
  data: {
    name: 'Tushar',
  },
};

store.dispatch(event);
console.log(store.getState())


// const createStore = () => {
//   let state = {name: "nitesh"}
//   let listeners = [];

//   const getState = () => state;

//   const subscribe = (callback) => {
//     listeners.push(callback)
//     return () => {
//        listeners = listeners.filter(listner => listner !== callback)

//       // console.log(listeners)

//     }
//   }


//   const dispatch = (event) => {
//    state = reducer(state, event)
//    this.listeners.forEach( listner => listner())
//   }

//   return {
//     state,
//     getState,
//     subscribe,
//     dispatch
//   }
// }

// const store = createStore(reducer);

// const event = {
//   type : 'ADD_TODO',
//   todo : {
//     name: "Get the job"
//   }
// }

// const reducer = (state=[], event) => {
//   if(event.type == 'ADD_TODO'){
//     return state.concat(event.todo)
//   }
//   return state
// }



// const unsubscribe = store.subscribe(() => console.log("hello"));
// unsubscribe()
// store.boradCast()

// // console.log(store.getState())

// reducer(store, eve)
// var some = "sime";
