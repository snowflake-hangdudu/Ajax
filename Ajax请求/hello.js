//导入express
const express = require("express");

//创建应用
const app = express();

//创建路由

app.get("/hello", (req, res) => {
  //设置响应头  设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.send("hello world");
  // res.render("index.html");
});

//监听端口
app.listen(9000, () => {
  console.log("服务器启动成功---");
});
