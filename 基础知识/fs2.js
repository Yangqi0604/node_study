var http = require("http");
var fs = require("fs")

var server = http.createServer(function (req, res) {
    if (req.url == "/favicon.ico") {
        return
    }
    //创建文件
    // fs.mkdir("../thing/aaa", function (err) {
    //     if (err) {
    //         throw err
    //     }
    // })
    //检测文件状态
    // fs.stat("../thing/aaa",function(err,data){
    //     //检测路径
    //     console.log(data.isDirectory())
    // })

    let wjj = [];
    fs.readFile('../thing', function (err, files) {
        for (var i = 0; i <= files.length; i++) {
            var theFilename = files[i];
            fs.stat('../thing/'+theFilename,function(err,stats){
                if(stats.isDirectory()){
                    wjj.push(theFilename)
                }
            })
        }
    })

    res.end()
})

server.listen(3000, "127.0.0.1")