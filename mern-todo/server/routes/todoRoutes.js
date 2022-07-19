const express=require('express')
const { addTodo, deleteTodo, updateTodo, getTodos } = require('../controllers/todoController')
const todo_route=express()


todo_route.post('/add', addTodo)
todo_route.delete('/delete', deleteTodo)
todo_route.patch('/update', updateTodo)
todo_route.get('/getTodos', getTodos)

module.exports=todo_route