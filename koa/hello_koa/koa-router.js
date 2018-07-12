var Koa = require('koa');
var Router = require('koa-router');


var app = new Koa();
var router = new Router();


router.get('/', (ctx,next) => {
    ctx.body = 'Hello,world';
});
router.get('/zhubajie', (ctx, next) => {
    ctx.body = "猪八戒"
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen('2000')
console.log(2000)
