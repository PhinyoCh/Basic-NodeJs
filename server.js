// let http = require('http');
// let dt = require('./firstmodule');
// let url = require('url');
// let fs = require('fs');
// let rs = fs.createReadStream('./demo.txt');
// let eventEmitter = new EventSource.eventEmitter();

// // Create an event handler:
// let myEventHandler = function(){
//     console.log(' I hear scream ');
// }
// // Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);
// // Fire the 'scream' event:
// eventEmitter.emit('scream')

// // rs.on('open', function(){
// //     console.log(' The flie is open ');
// // })

// // http.createServer(function (req, res){
// //     let q = url.parse(req.url, true);
// //     let fliename = "." + q.pathname;
// //     fs.readFile(fliename, function(err, data){
// //         if (err){
// //             res.writeHead(404, { 'Content-Type': 'text/html' });
// //             return res.end(' 404 Not Found ');
// //         }

// //         res.writeHead(200, { 'Content-Type': 'text/html' });
// //         res.write(data)
// //         return res.end();
// //     })
// // }).listen(8000);

// // fs.rename('mynewfile.txt', 'Filerename.txt', function(err, file){
// //     if (err) throw err;
// //     console.log('File Rename !!');
// // })