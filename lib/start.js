'use strict'
var http = require('http')
var fs = require('fs')
var notFound = require('./404')
var path = require('path')
var start = (port) => {
  http.createServer((req, res) => {
    var url = req.url
    switch (true) {
      case new RegExp('^/$', 'g').test(url) :
        {
                // index
          res.writeHead(200, {'Content-Type': 'text/html'})
          var file = fs.readFileSync('/../view/index.html')
          res.end(file)
          break
        }
      case new RegExp('^/static/.', 'g').test(url):
        {         // static folder
          var dir = __dirname.substr(0, __dirname.indexOf('lib'))
          if (fs.existsSync(path.join(dir, req.url))) { require('./static')(req, res) } else {
            notFound(res, '<h1>File ' + req.url + ' not found.</h1>')
          }
          break
        }
      default :
        {
          notFound(res, '<h1>Path ' + req.url + ' not found. </h1>')
          break
        }
    }
  }).listen(port)
}

module.exports.start = start
