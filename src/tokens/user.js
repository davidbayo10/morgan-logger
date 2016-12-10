'use strict';
const morgan = require('morgan');

morgan.token('user', req => {
  const user = req.user ? req.user.email : '';
  return user;
});
