'use strict'

var start = require('./start')
module.exports.start = start

var Routes = require('./routes')
var routes = new Routes()
module.exports.routes = routes
