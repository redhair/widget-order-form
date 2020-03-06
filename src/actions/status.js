import { SET_STATUS } from '../constants';

export const setStatus = status => {
  return {
    type: SET_STATUS,
    status
  };
};
