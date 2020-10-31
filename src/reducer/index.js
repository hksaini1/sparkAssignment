import { combineReducers } from 'redux';
import ds from './ds';
import web from './web';
import db from './db';

export default combineReducers({
    ds,
    web,
    db
  });