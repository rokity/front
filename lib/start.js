
const http = require('http');
const fs = require('fs');
const notFound = require('./404');
const path = require('path');
const staticView = require('./static');

const start = (routes, port) => {
  http.createServer((req, res) => {
    const url = req.url;

    switch (true) {
      case routes.getRoute(url) :
        {
                // index
          res.writeHead(200, { 'Content-Type': 'text/html' });
          const file = fs.readFileSync(`view/${routes.getView(url)}`);
          res.end(file);

          break;
        }
      case new RegExp('^/static/.', 'g').test(url):
        {         // static folder
          const dir = __dirname.substr(0, __dirname.indexOf('lib'));
          if (fs.existsSync(path.join(dir, req.url))) { staticView(req, res); } else {
            notFound(res, `<h1>File ${req.url} not found.</h1>`);
          }
          break;
        }
      default :
        {
          notFound(res, `<h1>Path ${req.url} not found. </h1>`);
          break;
        }
    }
  }).listen(port);
};

module.exports = start;
