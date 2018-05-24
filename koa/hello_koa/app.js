//1.先引入
const Koa = require("koa");

//2.创建一个koa对象表示web app本身
const app = new Koa();

//3.对于任何请求，app将调用该异步函数处理请求
// app.use(async (ctx, next) => {
//   await next();
//   // 设置response的Content-Type:
//   ctx.response.type = "text/html";
//   // 设置response的内容:
//   ctx.response.body = "<h1>Hello, koa21111111!</h1>"
// })

app.use(function async(ctx,next) {
  // await next();
  // 设置response的Content-Type:
  ctx.response.type = "text/html";
  // 设置response的内容:
  ctx.response.body = "<h1>koa2,你好咯ha</h1>";
})

/*
其中，参数ctx是由koa传入的封装了request和response的变量，我们可以通过它访问request和response，next是koa传入的将要处理的下一个异步函数。

上面的异步函数中，我们首先用await next();处理下一个异步函数，然后，设置response的Content-Type和内容。

由async标记的函数称为异步函数，在异步函数中，可以用await调用另一个异步函数，这两个关键字将在ES7中引入
*/


//4.最后在端口监听
app.listen(3000);
console.log('app started at post 3000...');