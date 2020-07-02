var http = require("http");


var server = http.createServer(function(req,res){
    var userUrl= req.url;
    console.log(userUrl);
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    
    res.end()
})

server.listen(3000,"127.0.0.1")