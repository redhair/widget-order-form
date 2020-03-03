import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

OrderForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

function getNextWeek() {
  var today = new Date();
  var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
  return nextweek;
}

const OrderFormSchema = Yup.object().shape({
  quantity: Yup.number()
    .integer('Must be a whole number.')
    .positive('Must be positive.')
    .required('Required'),
  color: Yup.string()
    .oneOf(['red', 'blue', 'yellow'])
    .required('Required'),
  date_needed: Yup.date()
    .min(getNextWeek(), 'Must be at least a week in the future.')
    .required('Required'),
  type: Yup.string()
    .oneOf(['Widget', 'Widget Pro', 'Widget Xtreme'])
    .required('Required')
});

function OrderForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        quantity: '',
        color: '',
        date_needed: '',
        type: ''
      }}
      validationSchema={OrderFormSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <Field type="number" name="quantity" min="1" placeholder="Quantity" />
          <ErrorMessage name="quantity" />
          <Field as="select" name="color">
            <option value="" disabled>
              Color
            </option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
          </Field>
          <ErrorMessage name="color" />
          <Field as="select" name="type">
            <option value="" disabled>
              Widget Type
            </option>
            <option value="Widget">Widget</option>
            <option value="Widget Pro">Widget Pro</option>
            <option value="Widget Xtreme">Widget Xtreme</option>
          </Field>
          <ErrorMessage name="type" />
          <Field type="date" name="date_needed" />
          <ErrorMessage name="date_needed" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default OrderForm;
