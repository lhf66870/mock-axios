const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

app.use( async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');

    await next();
})

router.get('/', async ctx => {
    ctx.body = {
        text:'请求成功了'
    }
})

router.get('/data', async ctx => {
    ctx.body = {
        text:'请求到data了'
    }
})

app.use( router.routes());

app.listen(8888)

