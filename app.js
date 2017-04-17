'use strict'
var http=require("http");var fs=require("fs");var not_found=require("./lib/404");
http.createServer((req, res) => {
        var url=req.url;
    switch(true) {
        case new RegExp("^/$","g").test(url) :
            {
                //index
             res.writeHead(200, {"Content-Type": "text/html"});                    
             var file=fs.readFileSync("view/index.html");   
             res.end(file);       
             break;
            }
        case new RegExp("^/static/.","g").test(url):
            {         //static folder      
            if (fs.existsSync(__dirname+req.url))      
                  require("./lib/static")(req,res);                        
            else {
                var txt = "<h1>File "+req.url+" not found.</h1>";
                  not_found(res,txt); 
                }            
            break;
            }
        default :
            {   
                var txt = "<h1>Path "+req.url+ " not found. </h1>";
                not_found(res,txt);
                break;
            }
    }     
    }).listen(8000);
