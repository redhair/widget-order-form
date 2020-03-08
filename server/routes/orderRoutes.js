const Order = require('../models/Order.js');

module.exports = {
  getAllOrders: function(req, res, next) {
    Order.find((err, orders) => {
      if (err) next(err);
      return res.json({ orders });
    });
  },
  createOrder: function(req, res, next) {
    Order.create(req.body.order, (err, order) => {
      if (err) next(err);
      res.json({ order });
    });
  }
};
