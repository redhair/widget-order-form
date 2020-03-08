const express = require('express');
const router = express.Router();
const orderRoutes = require('./orderRoutes.js');

router.get('/', function(req, res, next) {
  res.json({ title: 'Penn Medicine Express Server' });
});

router.get('/orders', orderRoutes.getAllOrders);
router.post('/orders', orderRoutes.createOrder);

module.exports = router;
