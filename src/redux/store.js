import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {albumReducer} from  './albums/albums';
import { localReducer } from './albums/localAlbum';
import { qobuzReducer } from './albums/qobuzAlbum';


const reducer = combineReducers({
  albums: albumReducer,
  local: localReducer,
  qobuz: qobuzReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;