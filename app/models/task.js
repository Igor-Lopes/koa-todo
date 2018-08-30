const mongoose = require("mongoose");

/* Ensure index is now deprecated: https://github.com/Automattic/mongoose/issues/6890 */
mongoose.set("useCreateIndex", true);

module.exports = app => {
  const schema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true
      },
      descr: {
        type: String
      },
      isCompleted: {
        type: Boolean,
        default: false
      }
    },
    {
      timestamps: true
    }
  );

  return mongoose.model("Task", schema);
};
