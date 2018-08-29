/* Koa */
const koa = require("koa");

/* Koa Router */
const koaRouter = require("koa-router");

/* Consign */
const consign = require("consign");

module.exports = () => {
  /* Setup Koa App */
  const app = new koa();

  /* Setup Koa Router */
  const router = new koaRouter();

  /*Add router to App*/
  app.router = router;

  /* Autoload modules with Consign */
  consign({
    cwd: "app"
  })
    .then("controllers")
    .then("routes")
    .into(app);

  app.use((ctx, next) => {
    ctx.test = "teste";
    next();
  });

  app.use(router.routes()).use(router.allowedMethods());

  return app;
};
