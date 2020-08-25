import { Context, Next } from "koa";
import { ResponseError, ResponseSuccess } from "../errno";

class Hello {
  async test(ctx: Context, next: Next) {
    ctx.body = ResponseSuccess("hello");

    await next();
  }
}

export { Hello };
