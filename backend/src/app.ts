import koa from "koa";
import koaRouter from "koa-router";
import { logger } from "./middleware/test";

const app = new koa();
const router = new koaRouter();

app.use(logger);

app.use(async (ctx, next) => {
  await next();
  if (ctx.status === 404) {
    ctx.status = 404;
    ctx.body = "404";
  }
});

router.get("/hello", async ctx => {
  ctx.body = "Hello World1";
});

router.get("/hello1", (ctx, next) => {
  ctx.body = "Hello World1";
});

app.use(router.routes());

app.listen(3000);
