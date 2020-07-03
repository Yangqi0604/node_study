/*
 * @Author: YangQi
 * @Date: 2020-07-02 15:50:47
 * @LastEditors: YangQi
 * @LastEditTime: 2020-07-02 16:22:06
 */
var express = require("express")
var bodyParser = require('body-parser')

var app = express();

//模板引擎
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
    res.render('form')
})

app.post("/", function (req, res) {
    console.log(req.body)
})



app.listen(3000)