import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import * as reducers from "./reducers";
// import * as middlewares from "./middlewares";
import thunk from "redux-thunk";

const middleware = [thunk] //, middlewares.loggingMiddleware];

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(...middleware))
);

export default store;
