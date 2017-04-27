
const http = require('http');
const fs = require('fs');
const notFound = require('./404');
const path = require('path');
const staticView = require('./static');
var Switcher = require("./routing/switcher");



const start = (routes, port) => {
  
  http.createServer((req, res) => {
    
    Switcher(req,res);
    
  }).listen(port);
};

module.exports = start;
