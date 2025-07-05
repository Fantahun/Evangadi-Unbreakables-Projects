// controllers/todoController.js
const todoService = require('../services/todoService');

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await todoService.getAll();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;
    const result = await todoService.create({ title, completed });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const result = await todoService.update(id, { title, completed });
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await todoService.delete(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
