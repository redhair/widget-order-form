import orders from './orders';

describe('reducers', () => {
  describe('orders', () => {
    const initialState = {};

    it('should provide the initial state', () => {
      expect(orders(undefined, {})).toEqual(initialState);
    });

    it('should handle CREATE_ORDER action', () => {
      let mockOrder = {
        quantity: 2,
        color: 'red',
        date_needed: '2020-03-26T00:00:00.000Z',
        type: 'Widget'
      };
      expect(orders({}, { type: 'CREATE_ORDER', order: mockOrder })).toEqual(mockOrder);
    });
  });
});
