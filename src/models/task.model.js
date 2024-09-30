const { Schema, model } = require("mongosee");

const TaskSchema = Schema({
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});
const TaskModel = model("Task", TaskSchema);
module.exports = TaskModel;
