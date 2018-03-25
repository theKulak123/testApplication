import {combineReducers} from 'redux';
import users from './users';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  users: users,
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);
