// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getAllTodos);
router.post('/addTodo', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;

// HTTP methods
// get => data retrive
// post => data send => new data creation
// put => data update => change existing data
// DELETE => REMOVE EXISTING DATA


// ROUTER  >  CONTROLLER > SERVICE(DATABASE QUERY)


// = [ {
//     "id": 1,
//     "title": "Buy groceries",
//     "completed": false
// },
// {
//     "id": 2,
//     "title": "Clean the house",
//     "completed": true
// }
// ]

// Frontend: www.unbreakables-todo.com
//                         |
//                         |
//                         |
// Backend: backend.unbreakables-todo.com