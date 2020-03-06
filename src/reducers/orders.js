import { CREATE_ORDER } from '../constants';

const initialState = {};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        ...action.order
      };
    default:
      return state;
  }
};

export default loading;
