const routes = require("./routes");
const Routes =new routes();
const fs = require("fs");
const notFound = require('./../404');
const path = require('path');
//const static = require('./../static')(staticUrl,staticPath);

var switcher = (req,res) =>
{
    const url = req.url;
    switch (true) {
      case Routes.getRoute(url) :
        {
                // RouteView
          res.writeHead(200, { 'Content-Type': 'text/html' });
          const file = fs.readFileSync(`view/${Routes.getView(url)}`);
          res.end(file);
          break;
        }
      case global.static.isStatic(url):
        {         // static 
            
            global.static.response(req,res);
         /* const dir = __dirname.substr(0, __dirname.indexOf('lib'));
          if (fs.existsSync(path.join(dir, req.url))) { static.response(req, res); } else {
            notFound(res, `<h1>File ${req.url} not found.</h1>`);
          } */
          break;
        }
      default :
        {
          notFound(res, `<h1>Path ${req.url} not found. </h1>`);
          break;
        }
    }

};
module.exports =switcher;