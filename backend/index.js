const express = require("express");
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const todosRoutes = require('./routes/todos.routes.js')


const app = express();
dotenv.config();

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/todos',todosRoutes)

mongoose.connect("mongodb://localhost:27017/todoapp");
const port = process.env.PORT || 3300;


app.get('/',(req,res) =>{
    res.send("Welcome")
})











app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
