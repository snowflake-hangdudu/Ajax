//导入express
const express = require("express");

//创建应用
const app = express();

//创建路由

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/hello", (req, res) => {
  //设置响应头，允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.send("Hello get");
  //响应一个页面
  // res.send(__dirname)
  res.sendFile(__dirname + "/index.html");
});

app.post("/hello", (req, res) => {
  //设置响应头，允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Hello post");
});

//监听端口
app.listen(9000, () => {
  console.log("服务器启动成功---");
});
