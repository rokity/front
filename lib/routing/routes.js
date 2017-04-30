const file = require('path').join(__dirname, 'routes.json');
const fs = require('fs');

const Routes = class Routes {
  constructor() {
    if (fs.existsSync(file)) { this.load(); } else {
      fs.writeFileSync(file, '{}');
      this.load();
    }
  }

  add(route) {
    if (route) {
      this.routes[route.url] = (route);
      this.write();
    }
  }

  getRoute(key) {
    
    if (key && this.routes[key]) { return true; } return false;
  }

  getType(url){
    console.log(this.routes);
   if(this.routes[url].callback)
    return "controller";
    else
      return "view";
  }

  getCallback(url){
    return this.routes[url].callback;
  }

  getView(key) {
    if (key && this.routes[key]) { return this.routes[key].view; } return null;
  }

  load() {
    this.routes = JSON.parse(fs.readFileSync(file, 'utf8'),parse);
  }

  write() {
    fs.writeFileSync(file, JSON.stringify(this.routes,replacer), 'utf-8');
  }
};

module.exports = Routes;

function replacer(key,value)
{
  if (typeof value === "function") {
    return "/Function(" + value.toString() + ")/";
  }
  return value;
}


function parse(key,value)
{
  if (typeof value === "string" &&
      value.startsWith("/Function(") &&
      value.endsWith(")/")) {
    value = value.substring(10, value.length - 2);
    return eval("(" + value + ")");
  }
  return value;
}