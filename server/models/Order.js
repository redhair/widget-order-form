const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    reqired: true
  },
  type: {
    type: String,
    required: true
  },
  date_needed: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Order', orderSchema);
