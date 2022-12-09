const express = require("express");
const Todo = require("../models/todoModel");
const router = express.Router();

//GET all todos
router.get("/", (req, res) => {
  res.json({
    msg: "GET all todo",
  });
});

//GET a single todo
router.get("/:id", (req, res) => {
  res.json({
    msg: "GET a single todo",
  });
});

//POST a new todo
router.post("/", async (req, res) => {
  const { title, priority, description } = req.body;

  try {
    const todo = await Todo.create({ title, priority, description });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE a todo
router.delete("/:id", (req, res) => {
  res.json({
    msg: "DELETE a todo",
  });
});

//UPDATE a todo
router.patch("/:id", (req, res) => {
  res.json({
    msg: "UPDATE a todo",
  });
});

module.exports = router;
