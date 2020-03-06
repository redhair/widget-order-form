import { combineReducers } from 'redux';
import loadingReducer from './loading';
import orderReducer from './orders';

const rootReducer = combineReducers({
  loading: loadingReducer,
  order: orderReducer
});

export default rootReducer;
