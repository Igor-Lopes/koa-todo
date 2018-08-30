module.exports = app => {
  const controller = {};
  const Task = app.models.task;

  controller.getAll = async (ctx, next) => {
    let result = await Task.find().lean();
    ctx.body = result;
  };

  controller.create = async (ctx, next) => {
    try {
      let result = await Task.create({
        title: ctx.request.body.title,
        descr: ctx.request.body.descr
      });

      ctx.status = 201;
      ctx.body = result;
    } catch (ex) {}
  };

  controller.getOne = async (ctx, next) => {
    try {
      let result = await Task.findById(ctx.params.id).lean();

      if (result) {
        ctx.body = result;
      } else {
        ctx.status = 404;
      }
    } catch (ex) {}
  };

  controller.update = async (ctx, next) => {
    try {
      let result = await Task.findByIdAndUpdate(
        ctx.params.id,
        {
          title: ctx.request.body.title,
          descr: ctx.request.body.descr
        },
        {
          new: true
        }
      ).lean();

      if (result) {
        ctx.body = result;
      } else {
        ctx.status = 404;
      }
    } catch (ex) {}
  };

  controller.delete = async (ctx, next) => {
    try {
      let result = await Task.findByIdAndDelete(ctx.params.id);

      ctx.status = 204;
    } catch (ex) {}
  };

  return controller;
};
