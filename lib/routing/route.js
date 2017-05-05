/**
 *  Define a route.
 */
const Route = class Route {
  /**
   * Creates an instance of Route.
   * @param {String} req Url
   * @param {String|Function} res Add a view {String} , Add a function {Function}
   * @param {JSON} con The JSON parameters to pass to template-engine
   */
  constructor(req, res, con) {
    if (req && res) {
      this.url = req;
      if (typeof (res) === 'function') { this.callback = res; } else {
        this.view = res;
        if (con) {
          this.context = con;
        }
      }
    }
  }


};

module.exports = Route;
