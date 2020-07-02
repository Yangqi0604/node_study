var http = require("http");
var fs = require("fs")

var server = http.createServer(function (req, res) {
    if (req.url == "/favicon.ico") {
        return
    }
    
    fs.readdir("../thing",function(err,files){
        var wenjianjia = [];
        (function iterator(i){
            if(i==files.length){
                return
            }
            fs.stat("../thing/"+files[i],function(err,stats){
                if(stats.isDirectory()){
                    wenjianjia.push(files[i]) 
                }
                iterator(i+1)   
            })
        })(0);
    })

    res.end()
})

server.listen(3000, "127.0.0.1")