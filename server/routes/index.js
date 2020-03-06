var express = require('express');
var router = express.Router();
var Order = require('../models/Order.js');

router.get('/', function(req, res, next) {
  res.json({ title: 'Penn Medicine Express Server' });
});

router.get('/orders', (req, res, next) => {
  Order.find((err, orders) => {
    if (err) next(err);
    res.json({ orders });
  });
});

router.post('/orders', (req, res, next) => {
  Order.create(req.body.order, (err, order) => {
    if (err) next(err);
    res.json({ order });
  });
});

module.exports = router;
