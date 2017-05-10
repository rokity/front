/** @module front */

const Routes = require('./lib/routing/routes');
const Start = require('./lib/start');
const Route = require('./lib/routing/route');
global.static = require('./lib/static');

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
module.exports.setViewPath = require('./lib/routing/switcher').setViewPath;

/**  vulcanize function
     Path of the output :
     static/dist/components/ */
module.exports.vulcanize = require('./lib/vulcanize').vulcanize;
