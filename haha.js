
var express = require("express")

var app =express();

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("haha",{
        news:["我是小新闻","我也是啊","哈哈哈哈"]
    })
})

app.listen(3000)