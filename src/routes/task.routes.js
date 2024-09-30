const express = require("express");
const TaskController = require("../controllers/task.controller");
const router = express.Router();
router.get("/", async (req, res) => {
    return new TaskController(req, res).getTasks();
});
router.get("/:id", async (req, res) => {
    return new TaskController(req, res).getTasksById();
});
router.post("/", async (req, res) => {
    return new TaskController(req, res).postTasks();
});
router.patch("/:id", async (req, res) => {
    return new TaskController(req, res).patchTasksById();
});
router.delete("/:id", async (req, res) => {
    return new TaskController(req, res).deleteTasks();
});
module.exports = router;
