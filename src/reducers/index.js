import { combineReducers } from 'redux';
import statusReducer from './status';
import orderReducer from './orders';

const rootReducer = combineReducers({
  status: statusReducer,
  order: orderReducer
});

export default rootReducer;
