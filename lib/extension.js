/** @module extensions */
const notFound = require('./404');

/**
 * Manage header response for static-file .
 * Set the Content-Type on header.
 * HANDLE WITH CARE , IT'S NOT COMPLETE !!!
 * @param {http.ClientRequest} req
 * @param {http.ServerResponse} res
 */
const extension = (req, res) => {
  const ext = req.url.substr(req.url.lastIndexOf('.') + 1, req.url.length - req.url.lastIndexOf('.'));
  switch (ext) {
    case 'css' :
      res.writeHead(200, { 'Content-Type': 'text/css' });
      break;

    case 'js' :

      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      break;

    case 'png' :

      res.writeHead(200, { 'Content-Type': 'image/png' });
      break;

    case 'jpg' :

      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      break;

    case 'gif' :

      res.writeHead(200, { 'Content-Type': 'image/gif' });
      break;

    case 'json' :

      res.writeHead(200, { 'Content-Type': 'application/json' });
      break;

    case 'pdf' :

      res.writeHead(200, { 'Content-Type': 'application/pdf' });
      break;

    case 'html' :

      res.writeHead(200, { 'Content-Type': 'text/html' });
      break;

    case 'svg' :
      res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
      break;

    default :
      {
        notFound(res);
        break;
      }
  }
};

module.exports = extension;
