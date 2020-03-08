const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
    validate: Number.isInteger
  },
  color: {
    type: String,
    required: true,
    enum: ['red', 'blue', 'yellow']
  },
  type: {
    type: String,
    required: true,
    enum: ['Widget', 'Widget Pro', 'Widget Xtreme']
  },
  date_needed: {
    type: Date,
    required: true,
    validate: v => {
      function getNextWeek() {
        var today = new Date();
        var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
        return nextweek;
      }

      let inputDate = new Date(v);
      let nextWeek = getNextWeek();

      return inputDate >= nextWeek;
    }
  }
});

module.exports = mongoose.model('Order', orderSchema);
