const mongoose = require('mongoose');

const { Schema } = mongoose

const todoSchema = new Schema({
    text:{type:String, required:true},
    completed:{type: Boolean, required: true},
    id:{type: String, required: true, unique: true},
    key:{type: String, required: true, unique: true},
})

exports.Todo = mongoose.model('Todo', todoSchema);