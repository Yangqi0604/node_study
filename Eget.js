/*
 * @Author: YangQi
 * @Date: 2020-07-02 15:41:28
 * @LastEditors: YangQi
 * @LastEditTime: 2020-07-02 15:42:55
 */ 
var express= require("express")

var app = express();

app.get("/",function(req,res){
    console.log(req.query)
    res.send()
})


app.listen(3000)