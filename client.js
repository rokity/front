

const server = require('./lib');

const Route = server.route;
const home = new Route('/home', 'index.html');
var routes = server.routes;
routes.add(home);

var index = new Route('/',(req,res) =>{    res.end("STOCAZZOOO"); });
routes.add(index);
server.static('static', 'static');

server.setViewPath("view");
//console.log(server.viewPath);

server.start(routes, 3000);
