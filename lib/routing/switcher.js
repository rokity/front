const Routes = require('./routes');
const fs = require('fs');
const notFound = require('./../404');

this.viewPath ="view";
const routes = new Routes();

const switcher = (req, res) => {
  const url = req.url;
  switch (true) {
    case routes.getRoute(url) :
      { 
          console.log(global.viewPath);
          if(routes.getType(url)=="view")
          {      // RouteView
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const file = fs.readFileSync(`${this.viewPath}/${routes.getView(url)}`);
        res.end(file);
          }
          else
          {
            var callback = routes.getCallback(url);
            callback(req,res);
          }
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
module.exports.setViewPath = (path) => 
{
  this.viewPath=path;
};
