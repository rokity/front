
var static=(req,res) => {

        //Create response header
        var extension=require("./extension");
        extension(req,res);
        //Create response body
        var fs=require("fs");       
        var path=__dirname.substr(0,__dirname.indexOf("lib"));                
        var file=fs.readFileSync(path+req.url);   
        res.end(file);
        
};

module.exports=static;