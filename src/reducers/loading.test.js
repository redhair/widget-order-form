import loading from './loading';

describe('reducers', () => {
  describe('orders', () => {
    const initialState = false;

    it('should provide the initial state', () => {
      expect(loading(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_LOADING action', () => {
      expect(loading({}, { type: 'SET_LOADING', loading: true })).toEqual(true);
      expect(loading({}, { type: 'SET_LOADING', loading: false })).toEqual(false);
    });
  });
});
