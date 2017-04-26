const extension = require('./extension');
const fs = require('fs');

const staticResponse = (req, res) => {
        // Create response header
  extension(req, res);
        // Create response body
  const path = __dirname.substr(0, __dirname.indexOf('lib'));

  const file = fs.readFileSync(path + req.url);
  res.end(file);
};

module.exports = staticResponse;
