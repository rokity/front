
/**
 * Manage the routes.
 */
const Routes = class Routes {

  /**
   * Initialize the object.
   * @constructor
   */
  constructor() {
    this.routes = {};
  }

  /**
   * Add a route to the list.
   * @param {Route} route
   */
  add(route) {
    if (route) {
      this.routes[route.url] = (route);
    }
  }

  /**
   *
   * Check if the route is already added.
   * @param {String} key
   * @returns {Boolean} true if exist , false isn't exist
   */
  getRoute(key) {
    if (key && this.routes[key]) { return true; } return false;
  }

  /**
   *
   * Check if the route is controlled by a function or by a view already defined.
   * @param {String} url
   * @returns {String} 'controller' if by function, 'view' if by view
   */
  getType(url) {
    if (this.routes[url].callback) { return 'controller'; }
    return 'view';
  }

  /**
   *
   * Return function of this route.
   * @param {String} url
   * @returns {Function}
   */
  getCallback(url) {
    return this.routes[url].callback;
  }

  /**
   *
   *  Return the parameters to pass to Handlebars for template-engine.
   * @param {String} url
   * @returns {JSON}
   */
  getContext(url) {
    if (this.routes[url].context) {
      return this.routes[url].context;
    }
    return null;
  }


  /**
   *
   *  Return filename of the view.
   * @param {any} url
   * @returns {String}
   */
  getView(url) {
    if (url && this.routes[url]) { return this.routes[url].view; } return null;
  }
};

module.exports = Routes;

