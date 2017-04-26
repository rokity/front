'use strict'

/* var Route = require('./lib/route')
 var home = new Route("/home", "home.html")
var about = new Route("/about", "about.html")

var Routes = require('./lib/routes')
var routes = new Routes()

 console.log(routes.getRoute("/"))
console.log(routes.getRoute("/home")) */

var server = require('./lib')

var Route = server.route
var home = new Route('/home', 'index.html')

var routes = server.routes
routes.add(home)

server.start(routes, 3000)
