import loading from './status';

describe('reducers', () => {
  describe('status', () => {
    const initialState = '';

    it('should provide the initial state', () => {
      expect(loading(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_LOADING action', () => {
      expect(loading({}, { type: 'SET_STATUS', status: 'loading' })).toEqual('loading');
      expect(loading({}, { type: 'SET_STATUS', status: 'confirmed' })).toEqual('confirmed');
    });
  });
});
