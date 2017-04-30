const file = require('path').join(__dirname, 'routes.json');
const fs = require('fs');
const replacer = require('./jsonUtil').replacer;
const parse = require('./jsonUtil').parse;


const Routes = class Routes {
  constructor() {
    if (fs.existsSync(file)) { this.load(); } else {
      fs.writeFileSync(file, '{}');
      this.load();
    }
  }

  add(route) {
    if (route) {
      this.routes[route.url] = (route);
      this.write();
    }
  }

  getRoute(key) {
    if (key && this.routes[key]) { return true; } return false;
  }

  getType(url) {
    if (this.routes[url].callback) { return 'controller'; }
    return 'view';
  }

  getCallback(url) {
    return this.routes[url].callback;
  }

  getContext(url) {
    if (this.routes[url].context) {
      return this.routes[url].context;
    }
    return null;
  }

  getView(key) {
    if (key && this.routes[key]) { return this.routes[key].view; } return null;
  }

  load() {
    this.routes = JSON.parse(fs.readFileSync(file, 'utf8'), parse);
  }

  write() {
    fs.writeFileSync(file, JSON.stringify(this.routes, replacer), 'utf-8');
  }
};

module.exports = Routes;

