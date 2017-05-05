/** @module switcher */
const fs = require('fs');
const notFound = require('./../404');
const Handlebars = require('handlebars');

this.viewPath = 'view';


/**
 * Switch routes.
 * @param {http.ClientRequest} req
 * @param {http.ServerResponse} res
 */
const switcher = (req, res) => {
  let context;
  const url = req.url;
  switch (true) {
    case global.routes.getRoute(url) :
      {
        if (global.routes.getType(url) === 'view') {      // RouteView
          res.writeHead(200, { 'Content-Type': 'text/html' });
          const file = fs.readFileSync(`${this.viewPath}/${global.routes.getView(url)}`, 'utf8');
          if (global.routes.getContext(url)) {
            if (typeof (global.routes.getContext(url)) === 'string') { context = JSON.parse(global.routes.getContext(url)); } else { context = global.routes.getContext(url); }
            const template = Handlebars.compile(file);
            const html = template(context);
            res.end(html);
          } else { res.end(file); }
        } else {
          const callback = global.routes.getCallback(url);
          callback(req, res);
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

/**
 * Set the path-folder for the views.
 * @param {String} path
 */
const setViewPath = (path) => {
  this.viewPath = path;
};

module.exports = switcher;
module.exports.setViewPath = setViewPath;
