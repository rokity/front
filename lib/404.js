'use stric'
var notFoundResponse = (res, text) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  if (text) { res.end(text) } else { res.end('<h1>404 File Not Found</h1>') }
}

module.exports = notFoundResponse
