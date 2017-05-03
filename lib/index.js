const Routes = require('./routing/routes');
const Start = require('./start');
const Route = require('./routing/route');
global.static = require('./static');

global.routes = new Routes();

module.exports.routes = global.routes;
module.exports.route = Route;
module.exports.start = Start;
module.exports.static = global.static;
module.exports.setViewPath = require('./routing/switcher').setViewPath;
