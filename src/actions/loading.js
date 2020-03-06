import { SET_LOADING } from '../constants';

export const setLoading = loading => {
  return {
    type: SET_LOADING,
    loading
  };
};
