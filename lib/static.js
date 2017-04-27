const extension = require('./extension');
const notFound = require('./404');
const fs = require('fs');
const path = require('path');

module.exports = (sp, su) => {
  if (!sp || !su) { throw new Error('Cannot declare static without staticPath and staticUrl parameters'); } else {
    this.staticPath = sp;
    this.staticUrl = su;
  }
};


module.exports.isStatic = (url) => {
  if (new RegExp(`^/${this.staticUrl}/.`, 'g').test(url)) { return true; }
  return false;
};

module.exports.response = (req, res) => {
  const mainDir = __dirname.substr(0, __dirname.indexOf('lib'));
  const fileName = req.url.substr(this.staticUrl.length + 1, req.url.length);
  const filePath = path.join(mainDir, this.staticPath, fileName);
  if (fs.existsSync(filePath)) {
       // Create response header
    extension(req, res);
      // Create response body
    const file = fs.readFileSync(filePath);
    res.end(file);
  } else {
    notFound(res, `<h1>Path ${req.url} not found. </h1>`);
  }
};

