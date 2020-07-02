var http = require("http");
var fs = require("fs")

var server = http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){
        return
    }
    var userId = parseInt(Math.random()*89999)+10000;
    console.log("欢迎"+userId)
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    //第一个参数是文件路径，第二个擦书是回调函数
    fs.readFile("../thing/1.txt",{'charset':'UTF-8'},function(err,data){
        if(err){
            throw err
        }
        console.log(userId+'文件读取结束')
        res.end(data)
    })
       
})

server.listen(3000,"127.0.0.1")