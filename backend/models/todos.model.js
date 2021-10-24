const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title:{
    type:String,
    required:true,
    },
    
    content: {
        type: String,
    },
    
}
,{timestamps:true});

module.exports = mongoose.model("Todo", todoSchema);