/* eslint-disable no-unused-expressions */
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Order = require('./models/Order');
const orderRoutes = require('./routes/orderRoutes');

describe('models', () => {
  it('should be invalid if any required fields are empty', done => {
    let o = new Order();

    o.validate(err => {
      expect(err.errors.quantity).to.exist;
      expect(err.errors.color).to.exist;
      expect(err.errors.type).to.exist;
      expect(err.errors.date_needed).to.exist;

      done();
    });
  });

  it('should be invalid if unsupported color is provided', done => {
    let o = new Order({
      color: 'purple'
    });

    o.validate(err => {
      expect(err.errors.color).to.exist;
      done();
    });
  });

  it('should be invalid if unsupported type is provided', done => {
    let o = new Order({
      type: 'badType'
    });

    o.validate(err => {
      expect(err.errors.type).to.exist;
      done();
    });
  });

  it('should be invalid if quantity is not a number', done => {
    let o = new Order({
      quantity: 'isString'
    });

    o.validate(err => {
      expect(err.errors.quantity).to.exist;
      done();
    });
  });

  it('should be invalid if quantity is not a whole number', done => {
    let o = new Order({
      quantity: 1.1
    });

    o.validate(err => {
      expect(err.errors.quantity).to.exist;
      done();
    });
  });

  it('should be invalid if date_needed is not at least a week in the future', done => {
    let o = new Order({
      date_needed: '1995-10-10'
    });

    o.validate(err => {
      expect(err.errors.date_needed).to.exist;
      done();
    });
  });
});

describe('routes', () => {
  beforeEach(function() {
    sinon.stub(Order, 'find');
    sinon.stub(Order, 'create');
  });

  afterEach(function() {
    Order.find.restore();
    Order.create.restore();
  });

  it('should send all orders', () => {
    let order1 = { quantity: 1, color: 'red', type: 'Widget', date_needed: '2021-10-10' };
    let order2 = { quantity: 2, color: 'blue', type: 'Widget', date_needed: '2021-10-10' };
    let expectedModels = [order1, order2];
    Order.find.yields(null, expectedModels);
    let req = { params: {} };
    let res = { json: sinon.stub() };
    orderRoutes.getAllOrders(req, res);
    sinon.assert.calledWith(res.json, { orders: expectedModels });
  });

  it('should create an order', () => {
    let order = { quantity: 1, color: 'red', type: 'Widget', date_needed: '2021-10-10' };
    Order.create.yields(null, order);
    let req = { body: { ...order } };
    let res = { json: sinon.stub() };
    orderRoutes.createOrder(req, res);
    sinon.assert.calledWith(res.json, { order });
  });
});
