import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OrderForm from '../../components/OrderForm';
import Confirmation from '../../components/Confirmation';
import { createOrderAsync } from '../../actions/orders';
import { setStatus } from '../../actions/status';

function OrderPage(props) {
  const dispatch = useDispatch();
  const status = useSelector(state => state.status);
  const order = useSelector(state => state.order);

  function handleSubmit(values) {
    dispatch(setStatus('loading'));
    dispatch(createOrderAsync(values)).finally(() => {
      dispatch(setStatus('confirmed'));
    });
  }

  function handleGoBack() {
    dispatch(setStatus(''));
  }

  return (
    <>
      <h1>Order Page</h1>
      {status === 'loading' ? (
        <h1>Loading...</h1>
      ) : status === 'confirmed' ? (
        <Confirmation order={order} onGoBack={handleGoBack} />
      ) : (
        <OrderForm order={order} onSubmit={handleSubmit} />
      )}
    </>
  );
}

export default OrderPage;
