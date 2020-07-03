/*
 * @Author: YangQi
 * @Date: 2020-06-28 17:47:31
 * @LastEditors: YangQi
 * @LastEditTime: 2020-06-28 17:57:58
 */
var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
    
    var queryObj = url.parse(req.url, true).query;
    var name = queryObj.name;
    var age = queryObj.age;
    var sex = queryObj.sex;
    res.writeHead(200,{"Content-Type":"text/text;charset=UTF8"})
    res.end('服务器收到了请求' + name + age + sex)
})

server.listen(3000, "127.0.0.1")