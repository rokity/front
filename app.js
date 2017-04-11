var http=require("http");

http.createServer((req, res) => {
   res.writeHead(200, {"Content-Type": "text/html"});
	var fs=require("fs");
var readStream=fs.createReadStream("index.html",{});
var data="";
readStream.on('data',(chunk) => { data += chunk; });
readStream.on('end',() => {
   res.end(data);});
}).listen(8000);
