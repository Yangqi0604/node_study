/*
 * @Author: YangQi
 * @Date: 2020-06-29 17:08:15
 * @LastEditors: YangQi
 * @LastEditTime: 2020-06-29 17:29:47
 */ 
var http = require('http')
var formidable = require("formidable");

var server = http.createServer(function (req, res) {
    if (req.url == "/dopost" && req.method.toLowerCase() == "post") {
        const form = formidable({ multiples: true ,uploadDir:'./upload'});
        form.parse(req, (err, fields, files) => {
            console.log(fields);
            console.log(files)
          res.writeHead(200, { 'content-type': 'application/json' });
          res.end("成功");
        });
    }
})


server.listen(80, "127.0.0.1")