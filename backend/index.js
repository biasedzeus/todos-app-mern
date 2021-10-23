const express = require("express");
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb:http://localhost:27017/todoapp");
const port = process.env.PORT || 3300;













app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
