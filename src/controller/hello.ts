import { Context, Next } from "koa";
import { Response, ResponseFail, ResponseSuccess } from "../errno";

class Hello {
  async test(ctx: Context, next: Next) {
    const banko = ctx.params.banko;
    ctx.body = ResponseSuccess(banko);

    await next();
  }
}

export { Hello };
