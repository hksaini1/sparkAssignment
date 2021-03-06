import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';
import logger from 'redux-logger';
let store;

export function configureStore() {
  //--- store can have only one reducer so we combineAll Reducer and import it here as reducer
  store = createStore(reducer, applyMiddleware(thunk, logger));

  return store;
}
