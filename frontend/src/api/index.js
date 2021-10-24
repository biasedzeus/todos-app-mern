import axios from 'axios';

const url ="http://localhost:3300/todos";

export const readTodos = () => axios.get(url);
export const createTodo = newTodo => axios.post(url,newTodo);

