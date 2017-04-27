
const http = require('http');
const Switcher = require('./routing/switcher');


const start = (routes, port) => {
  http.createServer((req, res) => {
    Switcher(req, res);
  }).listen(port);
};

module.exports = start;
