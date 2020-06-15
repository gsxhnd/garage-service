import koa from "koa";

async function Render(ctx: koa.Context, next: koa.Next) {
  ctx.set("Content-Type", "application/json");
  if (ctx.status === 404) {
    ctx.type = "application/json";
    ctx.status = 404;
    ctx.body = { message: "404" };
  } else {
    console.log(ctx.body);
    ctx.body = ctx.body;
  }
  await next();
}

export { Render };
