import { SET_STATUS } from '../constants';

const initialState = '';

const status = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return action.status;
    default:
      return state;
  }
};

export default status;
