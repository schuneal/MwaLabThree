const http = require('http');
const fs = require('fs');
// 1. First way

// const server = http.createServer((req, res)=>{
//     fs.readFile('./earth.jpg', function(err, imageFile){
//         if(err){
//             throw err;
//         }else{
//             res.writeHead(200, {'Content-Type':'text/plain'});
//             res.write(imageFile);
//             res.end()
//         }
//     });
// });
// server.listen(4000);


//2. Second Way

http.createServer((req, res)=>{
    var src = fs.createReadStream('./earth.jpg');
    src.on('data', function(data){
        if(!res.write(data)){
            src.pause();
        }
    });
    res.on('drain', function(){
        src.resume();
    });
    src.on('end', function(){
        res.end();
    });
}).listen(4000);



//3. Third Way
// http.createServer((req, res)=>{
//     var src = fs.createReadStream('./earth.jpg').pipe(res);
// }).listen(4000);

