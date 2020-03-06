const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

const port = process.env.PORT || 8080;

mongoose.connect(`mongodb://127.0.0.1:27017/widget-orders`, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
});

mongoose.connection.once('open', () => {
  console.log(new Date().toLocaleString() + ': MongoDB connection successful');
});

const routes = require('./routes');
const app = express();
app.use(logger('dev'));
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', routes);

app.listen(port, function() {
  console.log(new Date().toLocaleString() + ': Server started on port ' + port);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

module.exports = app;
