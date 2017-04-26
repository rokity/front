var extension = (req, res) => {
  var notFound = require('./404')
  var extension = req.url.substr(req.url.lastIndexOf('.') + 1, req.url.length - req.url.lastIndexOf('.'))
  switch (extension) {
    case 'css' :
      res.writeHead(200, {'Content-Type': 'text/css'})
      break

    case 'js' :

      res.writeHead(200, {'Content-Type': 'application/javascript'})
      break

    case 'png' :

      res.writeHead(200, {'Content-Type': 'image/png'})
      break

    case 'jpg' :

      res.writeHead(200, {'Content-Type': 'image/jpeg'})
      break

    case 'gif' :

      res.writeHead(200, {'Content-Type': 'image/gif'})
      break

    case 'json' :

      res.writeHead(200, {'Content-Type': 'application/json'})
      break

    case 'pdf' :

      res.writeHead(200, {'Content-Type': 'application/pdf'})
      break

    default :
      {
        notFound(res)
        break
      }
  }
}
module.exports = extension
