'use strict';
const morgan = require('morgan');
const logger = require('log4js').getLogger('API');

function getMorganMiddleware() {
  return morgan('\x1b[90m:method :url :statusColored \x1b[35m:size :response-time ms - \x1b[37m:ip :user', {
    format: 'default',
    stream: {
      write: (data) => {
        logger.info(data.trim());
      },
    },
  });
}

module.exports = function (app) {
  require('./tokens/ip');
  require('./tokens/size');
  require('./tokens/status');
  require('./tokens/user');
  const morganMiddleware = getMorganMiddleware();
  if (!app) {
    return morganMiddleware;
  }

  app.use(morganMiddleware);
};
