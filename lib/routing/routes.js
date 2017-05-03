
const Routes = class Routes {
  constructor() {
    this.routes = {};
  }

  add(route) {
    if (route) {
      this.routes[route.url] = (route);
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
};

module.exports = Routes;

