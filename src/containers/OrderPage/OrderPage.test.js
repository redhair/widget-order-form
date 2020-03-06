import React from 'react';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../reducers';
import { Provider } from 'react-redux';
import OrderPage from '.';

const store = createStore(rootReducer, applyMiddleware(thunk));

describe('<OrderPage />', () => {
  it('works', () => {
    render(
      <Provider store={store}>
        <OrderPage />
      </Provider>
    );
  });
});
