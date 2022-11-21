import Router from "@koa/router";
import * as exemplesCtrl from "#components/exemples/exemples-controller.js"

const exempleRouter = new Router();

exempleRouter.get("/", exemplesCtrl.getAll);

exempleRouter.get("/:id", exemplesCtrl.getOne);

exempleRouter.post("/", exemplesCtrl.create);

exempleRouter.put("/:id", exemplesCtrl.edit);

exempleRouter.delete("/:id", exemplesCtrl.remove);

export default exempleRouter;