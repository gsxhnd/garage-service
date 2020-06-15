import koa from "koa";
import { AppRoutes } from "./routes";
import { Render } from "./middleware/Render";

const app = new koa();
app.use(AppRoutes.routes());
app.use(Render);

app.listen(3000);
