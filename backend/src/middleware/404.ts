import koa from "koa";

async function NotFound(ctx: koa.Context, next: koa.Next) {
  await next();
  if (ctx.status === 404) {
    ctx.status = 404;
    ctx.body = "404";
  }
}

export { NotFound };
