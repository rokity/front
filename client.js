

const server = require('./lib');

const Route = server.route;
const home = new Route('/home', 'index.html');

const routes = server.routes;
routes.add(home);

server.static('view', 'static');

server.start(routes, 3000);
