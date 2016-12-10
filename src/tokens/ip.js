'use strict';
const morgan = require('morgan');

morgan.token('ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress || '';

  return ip;
});
