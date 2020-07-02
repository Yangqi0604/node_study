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
let strSql = "select * from student";

con.query(strSql,(err,results,fields)=>{
    console.log(err);
    console.log(results);
    console.log(fields)
})