// 引入用户路由
const userRouter = require("./user.js");

// 引入express模块
const express = require("express");
// 创建web服务器
const app = express();
// 配置端口号
app.listen(8080);

// 静态托管
app.use(express.static("public"));
// 解析方式
app.use(express.urlencoded({extends:false}));

// 用户路由挂载
app.use("/v1/user",userRouter);



// 错误处理
app.use((err,req,res,next)=>{
  console.log(err);
  res.status(500).send({code:0,msg:"服务器端错误"})
});


















// console.log('这是web服务器文件');
// console.log("2021/9/5添加");