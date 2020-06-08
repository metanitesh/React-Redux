const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.log("the action is", action);
  next(action);
  console.log("the new state is", store.getState());
  console.groupEnd()
}

export default logger;