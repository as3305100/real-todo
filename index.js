const express = require('express')
const server = express()
const mongoose = require('mongoose');
const {router} = require('./routes/todoRoute')
const path = require('path')

// config dotenv file
require('dotenv').config()
const public_dir = process.env.PUBLIC_DIR
const mongo_url = process.env.MONGO_DB_URL
const port = process.env.PORT

// db connection 
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongo_url);
   console.log("database connected")
}




server.use(express.json())
server.use(express.static(path.join(__dirname, public_dir)))
server.use(express.urlencoded({extended: true}))
server.use('/todos', router)

 server.use('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'public', 'index.html'))
 })
    

/*
server.get('/', async (req, res) => {
    try { 
        const todos = await Todo.find()
        res.status(200).json(todos)
      }catch (err){
       res.status(400).send(err)
      }
})

server.post('/', (req, res) => {
    const todo = new  Todo(req.body)
    try { 
      todo.save()
      res.status(201).send(todo)
    }catch(err) {
      console.log(err)
    }
})

server.delete('/:id', async (req, res) => {
    try { 
         const todo = await Todo.findOneAndDelete({ id: req.params.id }); 
         if (!todo)   { 
            return res.status(404).send('Product not found'); 
         } 
          res.status(200).send(`Deleted product`);
         } catch (err)
          { 
             res.status(500).send(err);

          }
})
server.patch('/:id', async (req, res) => {
    console.log(req.params.id)
    console.log(req.body)

    if(req.params.id && req.body.text) {
        console.log("hello")
    try { 
       const text = req.body.text
        await Todo.findOneAndUpdate({ id: req.params.id }, {text: text})
      
     }catch(err) {
        res.status(500).send(err)
     }
     return
    }
     
    

    try {
      let completed = req.body.completed
      console.log(completed)
       await Todo.findOneAndUpdate({ id: req.params.id }, {completed: completed})
    } catch(err) {
        res.status(500).send(err)
    }
   
    


})
    */




server.listen(port, () => {
    console.log('http://localhost:8000')
})