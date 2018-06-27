const Koa = require('koa')
const app = new Koa()
const koaloggo = require('./koa-loggo')

function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //成功返回
            resolve()
        },1000)
    })
}
app.use(koaloggo)

app.use(async(ctx, next) => {
    console.log(ctx);
    await delay()
    ctx.body = '1'
    await next()
    ctx.body += '2'
})

app.use(async(ctx,next) => {
    ctx.body += '3'
    await next()
    ctx.body += '4'
})

app.use(async(ctx, next) => {
    ctx.body += '5'
    await next()
    ctx.body += '6'
})

app.listen(6600)
console.log(6600)