module.exports = app => {
  const router = app.router;
  const controller = app.controllers.tasks.index;

  router
    .get("/tasks", controller.getAll)
    .post("/tasks", controller.create)
    .get("/tasks/:id", controller.getOne)
    .put("/tasks/:id", controller.update)
    .del("/tasks/:id", controller.delete);
};
