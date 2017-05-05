
const server = require('./lib');

server.static('static', 'static');
server.setViewPath('view');

const Route = server.route;
const routes = server.routes;

const obj = {};
obj.element = '<my-app-home></my-app-home>';
obj.elementUrl = 'static/components/home.html';
const json = JSON.stringify(obj);
const home = new Route('/home', 'home_template.html', json);
routes.add(home);


server.start(routes, 3000);
