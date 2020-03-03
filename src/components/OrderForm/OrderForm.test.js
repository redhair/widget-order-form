import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import OrderForm from '.';

describe('<OrderForm />', () => {
  it('works', () => {
    render(<OrderForm onSubmit={jest.fn()} />);
  });

  it('does not fire the onSubmit method with empty fields', async () => {
    const onSubmit = jest.fn();
    const { container } = render(<OrderForm onSubmit={onSubmit} />);
    const submit = container.querySelector('button[type="submit"]');

    await wait(() => {
      fireEvent.click(submit);
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('fires the onSubmit method with valid fields', async () => {
    const onSubmit = jest.fn();
    const { container } = render(<OrderForm onSubmit={onSubmit} />);
    const quantity = container.querySelector('input[name="quantity"]');
    const type = container.querySelector('select[name="type"]');
    const color = container.querySelector('select[name="color"]');
    const date_needed = container.querySelector('input[name="date_needed"]');
    const submit = container.querySelector('button[type="submit"]');

    await wait(() => {
      fireEvent.change(quantity, {
        target: {
          value: 2
        }
      });
    });

    await wait(() => {
      fireEvent.change(type, {
        target: {
          value: 'Widget Xtreme'
        }
      });
    });

    await wait(() => {
      fireEvent.change(color, {
        target: {
          value: 'red'
        }
      });
    });

    await wait(() => {
      fireEvent.change(date_needed, {
        target: {
          // rewrite this test in 2020 years
          value: '4040-03-01'
        }
      });
    });

    await wait(() => {
      fireEvent.click(submit);
    });

    expect(onSubmit).toHaveBeenCalled();
  });
});
