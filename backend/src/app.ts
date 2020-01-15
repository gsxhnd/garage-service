import koa from "koa";
import { logger } from "./middleware/test";

const app = new koa();

app.use(logger);

app.use(async ctx => {
  ctx.body = "Hello World1";
});

app.listen(3000);
