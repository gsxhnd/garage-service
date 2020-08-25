import { Hello } from "./controller/hello";
import koaRouter from "koa-router";

const hello = new Hello();
const AppRoutes = new koaRouter();

AppRoutes.get("/hello", hello.test);

export { AppRoutes };
