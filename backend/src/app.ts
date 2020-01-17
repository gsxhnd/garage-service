import koa from "koa";
import koaRouter from "koa-router";
import { logger } from "./middleware/test";
import { NotFound } from "./middleware/404";

const app = new koa();
const router = new koaRouter();

app.use(logger);
app.use(NotFound);

router.get("/hello", async ctx => {
  ctx.body = "Hello World";
});

app.use(router.routes());

app.listen(3000);
