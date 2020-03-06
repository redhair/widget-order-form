import React from 'react';
import { render } from '@testing-library/react';
import Confirmation from '.';

let mockOrder = {
  _id: 'fake_id',
  quantity: 2,
  color: 'red',
  date_needed: '2020-03-26T00:00:00.000Z',
  type: 'Widget'
};

describe('<Confirmation />', () => {
  it('works', () => {
    render(<Confirmation order={mockOrder} onGoBack={() => {}} />);
  });
});
