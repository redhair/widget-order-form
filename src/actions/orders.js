import { CREATE_ORDER, RESET_ORDER } from '../constants';
import { postOrder } from '../api';

export const resetOrder = () => {
  return {
    type: RESET_ORDER
  };
};

export const createOrder = order => {
  return {
    type: CREATE_ORDER,
    order
  };
};

export const createOrderAsync = values => {
  return function(dispatch) {
    return postOrder(values)
      .then(res => {
        dispatch(createOrder(res.data.order));
      })
      .catch(err => {
        console.error({ err });
      });
  };
};
