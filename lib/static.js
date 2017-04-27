const extension = require('./extension');
const notFound = require("./404");
const fs = require('fs');
var path = require("path");

module.exports = (sp,su) =>
{
      if(!sp || !su)
            throw 'Cannot declare static without staticPath and staticUrl parameters';
      else
      {
            this.staticPath = sp
            this.staticUrl = su;
            }
};


module.exports.isStatic =(url) =>
{     
      
      if(new RegExp(`^/${this.staticUrl}/.`,'g').test(url))
            return true;
      else
            return false;
};

module.exports.response = (req, res) => {
            
  var main_dir = __dirname.substr(0, __dirname.indexOf('lib'));
  var fileName = req.url.substr(this.staticUrl.length+1,req.url.length)
  var filePath = path.join(main_dir,this.staticPath,fileName);
  if(fs.existsSync(filePath))
   {
       // Create response header
      extension(req, res);
      // Create response body
      var file = fs.readFileSync(filePath);
      res.end(file);
   }
   else
   {  
         notFound(res, `<h1>Path ${req.url} not found. </h1>`);
   }
};


