/** @module front */

const Routes = require('./routing/routes');
const Start = require('./start');
const Route = require('./routing/route');
global.static = require('./static');

global.routes = new Routes();

/**  routes object */
module.exports.routes = global.routes;

/**  route function */
module.exports.route = Route;

/**  start function */
module.exports.start = Start;

/**  static function */
module.exports.static = global.static;

/**  setViewPath function */
module.exports.setViewPath = require('./routing/switcher').setViewPath;
