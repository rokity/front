const file = require('path').join(__dirname, 'routes.json')
var fs = require('fs')

var Routes = class Routes {
  constructor () {
    if (fs.existsSync(file)) { this.load() } else {
      fs.writeFileSync(file, '{}')
      this.load()
    }
  }

  add (route) {
    if (route) {
      this.routes[route.url] = (route)
      this.write()
    }
  }

  getRoute (key) {
    if (key && this.routes[key]) { return true } else { return false }
  }

  getView (key) {
    if (key && this.routes[key]) { return this.routes[key].view } else { return null }
  }

  load () {
    this.routes = JSON.parse(fs.readFileSync(file, 'utf8'))
  }

  write () {
    fs.writeFileSync(file, JSON.stringify(this.routes), 'utf-8')
  }
}

module.exports = Routes
