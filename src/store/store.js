import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import Todo from "./Reducers/Todo";
//import User from "./Reducers/User";

const rootReducers = combineReducers({
  Todo
  //User
});
const store = createStore(rootReducers, {}, applyMiddleware(thunkMiddleWare));
export default store;
