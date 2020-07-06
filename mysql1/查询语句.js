/*
 * @Author: YangQi
 * @Date: 2020-07-03 17:51:07
 * @LastEditors: YangQi
 * @LastEditTime: 2020-07-03 17:51:20
 */ 
// select * from books where viewcount>10 and viewcount<40

// select * from books where bookname = "反美阴谋"

// select * from books where viewcount != ""

// select * from books where viewcount = ""

// --查询梁空和陈映真
// select * from books where author = "梁空" or author = "陈映真"
// select * from books where author in ("梁空","陈映真")

// --书名跟地下相关的书名
// select * from books where bookname like "%之%"
// --知道四个字的书名,第一个字是海
// select * from books where bookname like "海___"

// --找出观看人数30以下的书
// select * from books where viewcount between 0 and 30
// select * from books where viewcount in (0,1,2,3,4,5)

// --查找邮箱是空的
// select * from yangqi where mail is null
// --查找邮箱为非空的
// select * from yangqi where mail is not null