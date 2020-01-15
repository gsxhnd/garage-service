import koa from "koa";

async function logger(ctx: koa.Context, next: koa.Next) {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
}

export { logger };
