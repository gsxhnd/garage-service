import { Hello } from "./controller/hello";
import koaRouter from "koa-router";
import koa from "koa";

const hello = new Hello();
const AppRoutes = new koaRouter();

AppRoutes.get("/jav/star_list", hello.test);
AppRoutes.get("/jav/star_detail/:star", hello.test);
AppRoutes.get("/jav/tag", hello.test);
AppRoutes.get("/jav/tag_detail/:tag", hello.test);
AppRoutes.get("/jav/subject_list/:banko_prefix", hello.test);
AppRoutes.get("/jav/subject_detail/:banko", hello.test);

AppRoutes.get("/bangumi", hello.test);

export { AppRoutes };
