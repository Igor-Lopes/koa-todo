/* Koa */
const koa = require("koa");

/* Koa Router */
const koaRouter = require("koa-router");

/* Koa Body Parser */

const bodyParser = require("koa-bodyparser");

/* Consign */
const consign = require("consign");

module.exports = () => {
  /* Setup Koa App */
  const app = new koa();

  /* Use Body Parser */
  app.use(bodyParser());

  /* Errors handler */
  app.on("error", (err, ctx) => {
    console.log("Errors details:");
    console.log(err.stack || err);
  });

  /* Setup Koa Router */
  const router = new koaRouter();

  /*Add router to App*/
  app.router = router;

  /* Autoload modules with Consign */
  consign({
    cwd: "app"
  })
    .then("models")
    .then("controllers")
    .then("routes")
    .into(app);

  app.use(router.routes()).use(router.allowedMethods());

  return app;
};
