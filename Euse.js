/*
 * @Author: YangQi
 * @Date: 2020-07-02 14:30:39
 * @LastEditors: YangQi
 * @LastEditTime: 2020-07-02 14:48:23
 */ 
var express = require("express")
var fs = require("fs")

var app = express();

app.use(haha);

app.listen(3000);

function haha(req,res,next){
    var filePath = req.originalUrl;
    console.log(filePath)
    //根据当前网址,读取public中的文件
    //如果有这个文件则渲染这个文件
    //如果没有就next()
    fs.readFile("."+filePath,function(err,data){
        if(err){
            next();
            return;
        }
        res.send(data.toString())
    })

}

