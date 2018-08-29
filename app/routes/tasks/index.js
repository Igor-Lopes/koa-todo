module.exports = app => {
  const router = app.router;

  router
    .get("/tasks", (ctx, next) => {
      ctx.body = "Hello World! - GET";
    })
    .post("/tasks", (ctx, next) => {
      ctx.body = "Hello World - POST";
    })
    .get("/tasks/:id", (ctx, next) => {
      ctx.body = "Hello World! - GET";
    })
    .put("/tasks/:id", (ctx, next) => {
      ctx.body = "Hello World - PUT";
    })
    .del("/tasks/:id", (ctx, next) => {
      ctx.body = "Hello World - DEL";
    });
};
