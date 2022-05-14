# Basic-NodeJs

command terminal

# RunServerNode
    node FileName    

command code

# Query String
    //require
    let url = require('url');

    let q = url.parse(req.url, true).query;
    let txt = q.year + " " + q.month
    res.end(txt);
    //Display values ​​based on URLs, 2 parameters, for example http://localhost:8000/?year=2020&month=november

# File Management System
    -- Read File index.html --
        //require
            let fs = require('fs')

            fs.readFile('index.html', function(err, data){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
            })
    
    -- Create File --
        --- appendFile //Creating a file mynewfile.txt with internal data as Hello World. and can update files If other information exists---
            
            fs.appendFile('mynewfile.txt', 'Hello World', function(err){
            if (err) throw err;
            onsole.log('Saved !!');
            })
        
        --- open //Creating a file mynewfile.txt for writing. ---

            fs.open('mynewfile.txt', 'w', function(err, file){
            if (err) throw err;
            console.log('Saved !!');
            })
        
        --- writeFile //will write data to an empty file If data already exists, it will be overwritten. or if not there will be a new file created. ---
            
            fs.writeFile('mynewfile.txt', 'Hello World', function(err, file){
            if (err) throw err;
            console.log('Saved !!');
            })

    -- Delete File --
        --- unlink //will delete the file named mynewfile.txt ---

        fs.unlink('mynewfile.txt', function(err, file){
        if (err) throw err;
        console.log('File Deleted !!');
        })

    -- Rename File --
        --- rename //will rename the file from mynewfile.txt is Filerename.txt ---

            fs.rename('mynewfile.txt', 'Filerename.txt', function(err, file){
            if (err) throw err;
            console.log('File Rename !!');
            })