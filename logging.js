'use strict';
const winston = require('winston'),
    expressWinston = require('express-winston');



const tsFormat = () => (new Date()).toLocaleTimeString();

const logger = new (winston.Logger)({

  transports: [
    new (winston.transports.Console)({
      colorize:true,
      timestamp:tsFormat,
      level: 'info'
    })
  ]
});
logger.level = 'debug';
logger.info('Hello Pepper');
logger.debug('Debugging info');


module.exports = winston;
