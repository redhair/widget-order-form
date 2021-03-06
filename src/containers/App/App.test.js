import React from 'react';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../../reducers';
import { Provider } from 'react-redux';
import App from '.';

const store = createStore(rootReducer, applyMiddleware(thunk));

describe('<App />', () => {
  it('works', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
