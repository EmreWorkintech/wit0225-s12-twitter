import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import tweetReducer from "./reducers/tweetReducer";
import userReducer from "./reducers/userReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const reducers = combineReducers({
  tweet: tweetReducer,
  user: userReducer,
});

export const myStore = createStore(reducers, applyMiddleware(thunk, logger));
