import { combineReducers } from 'redux';

import counter from './counter';
import item from './Item'

export default combineReducers({
  counter,
  item,
});