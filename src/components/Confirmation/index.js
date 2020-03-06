import React from 'react';
import PropTypes from 'prop-types';

Confirmation.propTypes = {
  order: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    date_needed: PropTypes.string.isRequired
  }).isRequired,
  onGoBack: PropTypes.func.isRequired
};

function Confirmation({ order, onGoBack }) {
  const { _id, quantity, type, color, date_needed } = order;

  return (
    <div>
      <p>Order ID: {_id}</p>
      <p>Quantity: {quantity}</p>
      <p>Type: {type}</p>
      <p>Color: {color}</p>
      <p>Arriving by: {new Date(date_needed).toLocaleDateString()}</p>
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
}

export default Confirmation;
