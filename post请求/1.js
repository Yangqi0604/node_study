/*
 * @Author: YangQi
 * @Date: 2020-06-29 16:26:51
 * @LastEditors: YangQi
 * @LastEditTime: 2020-06-29 16:49:02
 */
var http = require('http')
var querystring = require("querystring")
var server = http.createServer(function (req, res) {
    if (req.url == "/dopost" && req.method.toLowerCase() == "post") {
        var alldata = "";
        req.addListener("data", function (chunk) {
            alldata += chunk;
        })
        //全部传输完毕
        req.addListener("end", function () {
            var dataString = alldata.toString();
            res.end("success");
            //将dataString转为一个对象
            var dataObj = querystring.parse(dataString);
            console.log(dataObj)
        })
    }
})


server.listen(80, "127.0.0.1")