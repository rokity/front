const Routes = require('./routes');
const fs = require('fs');
const notFound = require('./../404');

const routes = new Routes();

const switcher = (req, res) => {
  const url = req.url;
  switch (true) {
    case routes.getRoute(url) :
      {
                // RouteView
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const file = fs.readFileSync(`view/${routes.getView(url)}`);
        res.end(file);
        break;
      }
    case global.static.isStatic(url):
      {         // static
        global.static.response(req, res);
        break;
      }
    default :
      {
        notFound(res, `<h1>Path ${req.url} not found. </h1>`);
        break;
      }
  }
};
module.exports = switcher;
