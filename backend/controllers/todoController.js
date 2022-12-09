const Todo = require("../models/todoModel");
const mongoose = require("mongoose");

//GET all todos
const getTodos = async (req, res) => {
  const todos = await Todo.find({}).sort({ createdAt: -1 });
  res.status(200).json(todos);
};

//GET a single todo
const getTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "invalid id" });
  }
  const todo = await Todo.findById(id);
  if (!todo) {
    res.status(404).json({ error: "no such todo" });
  }
  res.status(200).json(todo);
};

//CREATE new todo
const createTodo = async (req, res) => {
  const { title, priority, description } = req.body;
  //ADD doc to db
  try {
    const todo = await Todo.create({ title, priority, description });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE a todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid id" });
  }
  const todo = await Todo.findOneAndDelete({ _id: id });
  if (!todo) {
    return res.status(404).json({ error: "no such todo" });
  }
  res.status(200).json(todo);
};

//UPDATE a todo
const updateTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid id" });
  }
  const todo = await Todo.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!todo) {
    return res.status(404).json({ error: "no such todo" });
  }
  res.status(200).json(todo);
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
};
