const Routes = require('./routing/routes');

module.exports.routes = new Routes();

const Route = require('./routing/route');

module.exports.route = Route;

const Start = require('./start');
module.exports.start = Start;

var static = require("./static");
global.static = static
module.exports.static= global.static;