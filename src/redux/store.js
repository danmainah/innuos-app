import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { albumReducer } from './albums';


const reducer = combineReducers({
  albums: albumReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;