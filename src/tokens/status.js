'use strict';
const morgan = require('morgan');

morgan.token('statusColored', (req, res) => {
  const status = res.statusCode;
  let color = 32;
  if (status >= 500) { color = 31; }
  else if (status >= 400) { color = 33; }
  else if (status >= 300) { color = 36; }

  return '\x1b[' + color + 'm' + status;
});
