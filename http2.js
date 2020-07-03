/*
 * @Author: YangQi
 * @Date: 2020-06-28 16:43:19
 * @LastEditors: YangQi
 * @LastEditTime: 2020-06-28 16:46:40
 */ 
var http = require("http")

http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    res.end()
}).listen(3000,"127.0.0.1")