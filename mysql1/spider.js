/*
 * @Author: YangQi
 * @Date: 2020-07-03 14:17:56
 * @LastEditors: YangQi
 * @LastEditTime: 2020-07-03 16:54:20
 */
let mysql = require("mysql");
let axios = require("axios");
let cheerio = require("cheerio");

let options = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'book'
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
let page = 1;
let count = 1;
//获取第一个页面的所有书籍链接;
async function getpageUrl() {
    let httpUrl = "https://book.douban.com/latest?icn=index-latestbook-all";
    axios.get(httpUrl);
    let res = await axios.get(httpUrl);
    // console.log(res.data)
    let $ = cheerio.load(res.data);
    $(".article>ul>li>a").each((i, ele) => {
        let href = $(ele).attr("href");
        getBookInfo(href)
    })
}
getpageUrl()
async function getBookInfo(href) {
    let res = await axios.get(href);
    let $ = cheerio.load(res.data);
    //书籍图片
    let booking = $("#mainpic .nbg img").attr('src');
    //书籍名称
    let bookname = $("#wrapper>h1>span").text();
    //书籍作者
    let author = $("#info>span>a").text();
    //观看人数
    let viewcount = $('.rating_people>span').text()
    let arr = [bookname, author, booking, viewcount];
    //插入数据库
    let strSql = "insert into books (bookname, author, booking,viewcount) values (?,?,?,?)"
    con.query(strSql, arr, (err, results) => {
        console.log(err);
        console.log(results)
    })
}
// getBookInfo()
