const express = require("express");
const Todo = require("../models/todo.js");
const routerTodo = express.Router();

routerTodo.post("/create", async (req, res) => {
  const { title, description, user_id, status } = req.body;

  try {
    const todo = await Todo.create({
      title,
      description,
      user_id,
      status,
    });
    res.status(201).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create todo" });
  }
});

routerTodo.get("/get/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todos = await Todo.findAll({ where: { user_id: id } });
    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

routerTodo.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    todo.status = status;
    await todo.save();
    res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update todo" });
  }
});

routerTodo.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    await todo.destroy();
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete todo" });
  }
});

module.exports = routerTodo;
