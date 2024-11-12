const express = require('express')
const router = express.Router()

const {getAll, create, remove, update} = require('../controller/todo')

router.get('/', getAll)
.post('/', create)
.delete('/:id', remove)
.patch('/:id', update)

exports.router = router



