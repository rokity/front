/** @module start */

const http = require('http');
const Switcher = require('./routing/switcher');

/**
 * Start the server .
 * @param {Routes} routes
 * @param {Number} port
 */
const start = (routes, port) => {
  console.log("Server Start localhost:",port);
  http.createServer((req, res) => {
    Switcher(req, res);
  }).listen(port);
};


module.exports = start;
