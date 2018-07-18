const Koa = require('koa');
const app = new Koa();

const bodyParser = require("koa-bodyparser");

const router = require('./router');

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.use(require('./middlewares/response'));


//在router之前引入bodyPaeser
app.use(bodyParser());
// response

app.use(router.routes()).use(router.allowedMethods());

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3030);