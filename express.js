/*
 * @Author: YangQi
 * @Date: 2020-07-01 12:03:11
 * @LastEditors: YangQi
 * @LastEditTime: 2020-07-01 12:04:50
 */ 
var express = require("express")
var app = express();

app.get("/",function(req,res){
    res.end("你好")
})

app.listen(3000)