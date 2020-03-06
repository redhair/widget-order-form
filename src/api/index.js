import axios from 'axios';

export function postOrder(order) {
  return axios.post('/orders', { order });
}
