'use strict'
var http=require("http");var fs=require("fs");var not_found=require("./lib/404");
http.createServer((req, res) => {
        var url=req.url;
    switch(true) {
        case new RegExp("^/$","g").test(url) :
            {
             res.writeHead(200, {"Content-Type": "text/html"});                    
             var file=fs.readFileSync("view/index.html");   
             res.end(file);
        res.end(file);
             break;
            }
        case new RegExp("^/static/.","g").test(url):
            {               
            if (fs.existsSync(__dirname+req.url))      
                  require("./lib/static")(req,res);                        
            else 
                  not_found(res);             
            break;
            }
        default :
            {
                not_found(res);
                break;
            }
    }     
    }).listen(8000);
