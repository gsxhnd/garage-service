import koa from "koa";
import { AppRoutes } from "./routes";
import { Render } from "./middleware/Render";
import bodyParser from "koa-bodyparser";

const app = new koa();
app.use(bodyParser());
app.use(AppRoutes.routes());
app.use(Render);

app.listen(8001);
