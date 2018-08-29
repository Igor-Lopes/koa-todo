module.exports = app => {
  const controller = {};

  controller.getAll = (ctx, next) => {
    ctx.body = "Hello World! - GET";
  };

  controller.create = (ctx, next) => {
    ctx.body = "Hello World! - POST";
  };

  controller.getOne = (ctx, next) => {
    ctx.body = "Hello World! - GET";
  };

  controller.update = (ctx, next) => {
    ctx.body = "Hello World - PUT";
  };

  controller.delete = (ctx, next) => {
    ctx.body = "Hello World - DEL";
  };

  return controller;
};
