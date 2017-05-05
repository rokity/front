
const server = require('./lib');

server.static('static', 'static');
server.setViewPath('view');

const Route = server.route;
const routes = server.routes;

// Define Home Route
const homeContext = {};
homeContext.element = '<my-app-home></my-app-home>';
homeContext.elementUrl = 'static/components/home.html';
const jsonHomeContext = JSON.stringify(homeContext);
const homeRoute = new Route('/home', 'home_template.html', jsonHomeContext);
routes.add(homeRoute);

//Define Accedi Route
const accediContext = {};
accediContext.element = '<my-app-accedi></my-app-accedi>';
accediContext.elementUrl = 'static/components/accedi.html';
const jsonAccediContext = JSON.stringify(accediContext);
const accediRoute = new Route('/accedi', 'home_template.html', jsonAccediContext);
routes.add(accediRoute);


server.start(routes, 3000);
