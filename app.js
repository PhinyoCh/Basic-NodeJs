let formidable = require('formidable');
let fs = require('fs');
let http = require('http')

http.createServer(function(req, res){
    
    if (req.url == '/fileupload'){
        let form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            let oldpath = files.fileupload.path;
            let newpath = '\Users\Phinyo\Desktop\Basic-NodeJs\img' + files.fileupload.name;
            fs.rename(oldpath, newpath, function(err){
                if (err) throw err;
                res.write('File uploaded and moved');
                res.end();
            })
        })
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="fileupload" method=""post enctype="multipart/form-data">');
        res.write('<input type="file" name="fileupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }       
}).listen(8000);