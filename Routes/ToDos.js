const express = require('express');
const route = express.Router();
const { getAllTodos, addNewTodo , addTodo, editTodo, updateTodo, deleteTodo} = require("../Controllers/todos");
const { midFunc } = require('../Middlewares/midFunc');

route.get('/',getAllTodos)
route.get('/add',addTodo)
route.post('/addTodo',addNewTodo)
route.get('/edit/:id',midFunc,editTodo)
route.post('/update/:id',updateTodo);
route.get('/delete/:id',deleteTodo)
module.exports = route;