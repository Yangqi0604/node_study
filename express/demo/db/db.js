/*
 * @Author: YangQi
 * @Date: 2020-07-04 15:21:24
 * @LastEditors: YangQi
 * @LastEditTime: 2020-07-06 09:53:47
 */
const mysql = require("mysql");

let options = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'pddshop'
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

module.exports = con;