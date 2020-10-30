import {Router} from 'express'
import {getTodos, getTodo, addTodo, updateTodo, removeTodo} from "../controllers/todos"
const ROUTER = Router()

ROUTER.get('/api/todos', getTodos)
ROUTER.get('/api/todo/:id', getTodo)
ROUTER.post('/api/add-todo', addTodo)
ROUTER.put('/api/update-todo/:id', updateTodo)
ROUTER.delete('/api/remove-todo/:id', removeTodo)

export default ROUTER