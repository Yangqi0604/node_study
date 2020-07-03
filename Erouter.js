/*
 * @Author: YangQi
 * @Date: 2020-07-01 18:01:08
 * @LastEditors: YangQi
 * @LastEditTime: 2020-07-01 18:05:45
 */ 
var express = require("express")

var app = express();

app.get("/student/:id",function(req,res){
    var id = req.params["id"];
    var reg = /^[\d]{6}$/;
    if(reg.test(id)){
        res.send(id)
    }else{
        res.send("jiancha")
    }
})

app.listen(3000)