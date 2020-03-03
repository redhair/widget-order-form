import React from 'react';
import OrderForm from '../../components/OrderForm';

function OrderPage(props) {
  return (
    <>
      <h1>Order Page</h1>
      <OrderForm onSubmit={values => console.log({ values })} />
    </>
  );
}

export default OrderPage;
