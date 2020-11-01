import {Router} from 'express'
import {getTodos, getTodo, addTodo, updateTodo, removeTodo} from "../controllers/todos"
import bodyParser from 'body-parser'

const ROUTER = Router()
const JSONPARSER = bodyParser.json()

ROUTER.get('/api/todos', getTodos)
ROUTER.get('/api/todo/:id', getTodo)
ROUTER.post('/api/add-todo', JSONPARSER, addTodo)
ROUTER.put('/api/update-todo/:id',JSONPARSER, updateTodo)
ROUTER.delete('/api/remove-todo/:id',JSONPARSER, removeTodo)

export default ROUTER