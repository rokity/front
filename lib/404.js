var not_found_response=(res) => {
                res.writeHead(200, {"Content-Type": "text/html"});   
                res.end("not found");
};

module.exports=not_found_response;