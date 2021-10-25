const express = require('express');
const { readTodos, createTodo,updateTodo} = require('../controller/todos.controller');
const Task = require("../models/todos.model");
const app = express();
const router = express.Router()



router.get('/',readTodos)
router.post('/',createTodo)
router.patch('/:id',updateTodo)


module.exports = router;