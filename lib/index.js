const Routes = require('./routing/routes');
const Start = require('./start');
const Route = require('./routing/route');
global.static = require('./static');


module.exports.routes = new Routes();
module.exports.route = Route;
module.exports.start = Start;
module.exports.static = global.static;
module.exports.setViewPath = require('./routing/switcher').setViewPath;