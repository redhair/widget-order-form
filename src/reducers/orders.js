import { CREATE_ORDER, RESET_ORDER } from '../constants';

const initialState = {};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        ...action.order
      };
    case RESET_ORDER:
      return {};
    default:
      return state;
  }
};

export default loading;
