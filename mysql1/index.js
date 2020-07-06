/*
 * @Author: YangQi
 * @Date: 2020-07-03 09:40:24
 * @LastEditors: YangQi
 * @LastEditTime: 2020-07-04 15:19:20
 */
let mysql = require("mysql");

let options = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'yangqi'
}
//创建与数据库的链接对象
let con = mysql.createConnection(options)

//建立链接
con.connect((err => {
    if (err) {
        console.log(err)
    } else {
        console.log("数据库链接成功")
    }
}))

//执行数据库的语句
//执行查询语句
// let strSql = "select * from student";

// con.query(strSql,(err,results,fields)=>{
//     console.log(err);
//     console.log(results);
//     // console.log(fields)
// });



//删除表的操作
// let strsql2 = "drop table student";
// con.query(strsql2, (err, results) => {
//     console.log(err);
//     console.log(results);
// })

//删除库
// let strsql3 = "drop database node2020";
// con.query(strsql3,(err,results)=>{
//     console.log(err);
//     console.log(results)
// })

//创建库
// let strSql4 = "create database yangqi";
// con.query(strSql4,(err,results)=>{
//     console.log(err);
//     console.log(results)
// })

// //创建标
// let strSql5 = 'CREATE TABLE `yangqi`  (`id` int NOT NULL AUTO_INCREMENT,`username` varchar(255) NULL,`password` varchar(255) NULL,`mail` varchar(255) NULL,PRIMARY KEY (`id`));'
// con.query(strSql5,(err,results)=>{
//     console.log(err);
//     console.log(results)
// })

//插入数据
// let strSql6 = "insert into yangqi (username,password) values ('yangqi','123456')"
// con.query(strSql6,(err,results)=>{
//     console.log(err);
//     console.log(results)
// })
// let strSql7 = "insert into yangqi (username,password,mail) values (?,?,?)";
// con.query(strSql7,["小红","passorld","123@126.com"],(err,results)=>{
//     console.log(err);
//     console.log(results)
// })

//改
// const body={
//     id:4,
//     username:"xiaohong",
//     password:"123456"
// }
// let strSql8='update yangqi set ? where id = ?';
// con.query(strSql8,[body,body.id],function(err,results){
//     if(err){
//         throw err
//     }
//     console.log(results)
// })

//删
// const strSql9 = 'delete from yangqi where id = ?';
// con.query(strSql9, 2, function (err, results) {
//     if (err) {
//         throw err
//     }
//     console.log(results)
// })

//软删除




