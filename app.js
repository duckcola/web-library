﻿
var mysql      = require('mysql'); //定义一个数据库变量
const express = require('express'); 
const app = express(); //定义express()变量 ,引入了 express 模块，并在客户端发起请求后，响应 send字符串    



app.use(express.static(__dirname + '/'));
	
app.get('/index', function (req, res) {        //首页API,req请求，res回应
    res.sendFile(__dirname  + '/index.html');
});
app.get('/login', function (req, res) {            //登录页面API
    res.sendFile(__dirname  + '/login.html');
});
app.get('/book', function (req, res) {               //书籍详情API
    res.sendFile(__dirname + '/book.html');
});
app.listen(3000, () => {	
    console.log('running on port 3000...');           //监听在localhost 3000
});

const connection = mysql.createConnection({
	host     : 'localhost',  //服务器名
	user     : 'root',		//用户名
	password : '1234',				//密码
	port: '3306',				//端口名
	database : 'book'			//数据库名
});        //这些都是在创建数据库时，自己设置的

//创建一个连接 
connection.connect();  //连接数据库

app.get("/all_news", function (req, res) {

    const sql_str ='SELECT * FROM allbook';
 
    connection.query(sql_str, function (err, result) {
        if (err) {
            console.log("读取数据失败！" + err);
        } else {
            console.log(result);
            res.send(result);
        }
    });
});  //查询数据库的所有数据的API

app.get("/users", function (req, res) {

    const sql_str1 ='SELECT * FROM user';
   
    connection.query(sql_str1, function (err, result) {
        if (err) {
            console.log("读取数据失败！" + err);
        } else {
            console.log(result);
            res.send(result);
        }
    });
});   //查询数据库的所有用户的API





	


	