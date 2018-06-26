const Koa = require('koa')

const app = new Koa();

//打印出来的结果是 ： 135642 中间件的顺序 》》   中间件2 > 中间件1 > ... 中间件n > ... > 中间件1 > 中间件2 这就是相应结果
app.use(async(ctx, next) => {
    ctx.body = '1';
    //中间件
    next();
    ctx.body = ctx.body + '2';
})

app.use(async(ctx, next) => {
    ctx.body += '3';
    next();
    ctx.body += '4';
})

app.use(async(ctx, next) => {
    ctx.body += '5';
    next();
    ctx.body += '6';
})


// app.use(async(ctx) => {
//     ctx.body = 'hello Fred'
// });

app.listen(3000)
console.log('app started at post 3000...');