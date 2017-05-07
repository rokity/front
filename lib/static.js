/** @module static */

const extension = require('./extension');
const notFound = require('./404');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

/**
 * Setting folder of static files and url to access to static
 * @param {String} sp the path where is located the static files
 * @param {String} su the  url for access to static folder
 */
module.exports = (sp, su) => {
  if (!sp || !su) {
    throw new Error('Cannot declare static without staticPath and staticUrl parameters');
  } else {
    this.staticPath = sp;
    this.staticUrl = su;
  }
};


/**
 * Check if the url is stastic url.
 * @param {String} url - http.ClientRequest.url or also called req.
 * @returns {Boolean} "true"" if is a static url , "false" if isn't.
 */
module.exports.isStatic = (url) => {
  if (new RegExp(`^/${this.staticUrl}/.`, 'g').test(url)) { return true; }
  return false;
};


/**
 * Create a response for html request with gzip .
 * @param {http.ClientRequest} req - http request variable
 * @param {http.ServerResponse} res - http response variable
 * @param {String} filePath - path of the file requested
 */
const gzip = (req, res, filePath) => {
  const file = fs.createReadStream(filePath);
  let acceptEncoding = req.headers['accept-encoding'];
  if (!acceptEncoding) {
    acceptEncoding = '';
  }
  if (acceptEncoding.match(/\bdeflate\b/)) {
    res.writeHead(200, { 'Content-Encoding': 'deflate' });
    file.pipe(zlib.createDeflate()).pipe(res);
  } else if (acceptEncoding.match(/\bgzip\b/)) {
    res.writeHead(200, { 'Content-Encoding': 'gzip' });
    file.pipe(zlib.createGzip()).pipe(res);
  } else {
    res.writeHead(200, {});
    file.pipe(res);
  }
};

/**
 *  Create response for static file.
 * @param {http.ClientRequest} req - http request variable
 * @param {http.ServerResponse} res - http response variable
 */
module.exports.response = (req, res) => {
  const mainDir = __dirname.substr(0, __dirname.indexOf('lib'));
  const fileName = req.url.substr(this.staticUrl.length + 1, req.url.length);
  const filePath = path.join(mainDir, this.staticPath, fileName);
  if (fs.existsSync(filePath)) {
       // Create response header
    const ext = extension(req, res);

    if (ext === 'html') {
      // Create a response with gzip
      gzip(req, res, filePath);
    } else {
          // Create response body for asset files
      const file = fs.readFileSync(filePath);
      res.end(file);
    }
  } else {
    notFound(res, `<h1>Path ${req.url} not found. </h1>`);
  }
};

