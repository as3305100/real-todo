const express = require('express')
const {Todo} = require('../model/modelTodo')


exports.getAll = async(req, res) => {
    try { 
        const todos = await Todo.find()
        res.status(200).json(todos)
      }catch (err){
       res.status(400).send("not found")
      }
}

exports.create = async (req, res) => {
    const todo = new  Todo(req.body)
    try { 
      todo.save()
      res.status(201).send("Todo is created")
    }catch(err) {
      res.status(400).send("Not created")
    }
}

exports.remove = async (req, res) => {
    try { 
        const todo = await Todo.findOneAndDelete({ id: req.params.id }); 
        if (!todo)   { 
           return res.status(404).send('Product not found'); 
        } 
         res.status(200).send(`Deleted product`);
        } catch (err)  { 
            res.status(500).send(err);
         }
}

exports.update = async (req, res) => {
     
    if(req.params.id && req.body.text) {

    try { 
       const text = req.body.text
        await Todo.findOneAndUpdate({ id: req.params.id }, {text: text})
      
     }catch(err) {
        res.status(500).send(err)
     }

    } else {
         
    try {
         let completed = req.body.completed
         await Todo.findOneAndUpdate({ id: req.params.id }, {completed: completed})
      } catch(err) {
          res.status(500).send(err)
      }
    }
}