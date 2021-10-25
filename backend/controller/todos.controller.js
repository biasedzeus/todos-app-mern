const mongoose = require('mongoose');
const Todo = require('../models/todos.model')


 const readTodos = async (req,res) =>{
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({error:error.message,
    "shit":"this sucks"})
    }
}

 const createTodo = async (req,res) =>{
    const todo = new  Todo(req.body);
    try {
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(409).json({error:error.message})
    }
}
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  // if(!mongoose.isValidObjectId(id)){
  //     return res.status(404).send(`The Id ${id} is not valid`);

  // }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`The Id ${id} is not valid`);
  }

  const todo = { title, content, id };
  await Todo.findByIdAndUpdate(id, todo, { new: true });
  res.json(todo);
}; 

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .send(`The Object to be deleted, its Id ${id} is not valid`);
  }

  await Todo.findByIdAndRemove(id);
  res.json({message:"Todo deleted SuccessFully."});
}; 


module.exports = {readTodos,createTodo,updateTodo,deleteTodo};