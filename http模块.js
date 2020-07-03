/*
 * @Author: YangQi
 * @Date: 2020-06-28 12:20:47
 * @LastEditors: YangQi
 * @LastEditTime: 2020-06-28 14:07:56
 */ 
var http = require("http");



var server = http.createServer(function(req,res){
    //req参数表示请求，res表示响应
    console.log("服务器接收到了请求" + req.url);
    //返回头
    res.writeHead(200,{"Content-Type":"text/text;charset=UTF8"})
    res.end("<h1>我是一个主标题<h1>")
})

server.listen(3000,"127.0.0.1")