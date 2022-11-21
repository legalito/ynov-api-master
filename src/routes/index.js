import Router from "@koa/router";
import exempleRoutes from "#components/exemples/exemples-routes.js";

const API_V1_ROUTER = new Router({prefix: "/api/v1"});

API_V1_ROUTER.use("/exemples", exempleRoutes.routes(), exempleRoutes.allowedMethods());

export { API_V1_ROUTER }