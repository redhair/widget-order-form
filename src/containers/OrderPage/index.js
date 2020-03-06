import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OrderForm from '../../components/OrderForm';
import Confirmation from '../../components/Confirmation';
import { createOrderAsync, resetOrder } from '../../actions/orders';
import { setLoading } from '../../actions/loading';

function OrderPage(props) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const order = useSelector(state => state.order);

  function handleSubmit(values) {
    dispatch(setLoading(true));
    dispatch(createOrderAsync(values)).finally(() => {
      dispatch(setLoading(false));
    });
  }

  function handleGoBack() {
    dispatch(resetOrder({}));
  }

  return (
    <>
      <h1>Order Page</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : Object.keys(order).length > 0 ? (
        <Confirmation order={order} onGoBack={handleGoBack} />
      ) : (
        <OrderForm onSubmit={handleSubmit} />
      )}
    </>
  );
}

export default OrderPage;
