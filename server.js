let http = require('http');
let dt = require('./firstmodule');
let url = require('url');
let fs = require('fs')

http.createServer(function (req, res){
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen(8000);

fs.rename('mynewfile.txt', 'Filerename.txt', function(err, file){
    if (err) throw err;
    console.log('File Rename !!');
})