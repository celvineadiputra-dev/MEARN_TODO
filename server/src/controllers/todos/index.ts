import {Request, Response} from 'express'
import TodoModel from "../../models/todo"
import {Todo} from '../../types/todo'

export const getTodos = async(req:Request, res:Response)=>{
    const TODOS:Todo[] = await TodoModel.find()
    res.status(200).json({TODOS})
}

export const getTodo = async(req:Request, res:Response)=>{
    await TodoModel.findById(req.params.id, (err, result) =>{
        err ? res.status(400).json({error: err}) : res.status(200).json({result})
    })
}

export const addTodo = async(req:Request, res:Response): Promise<void> =>{
    const BODY: Pick<Todo, 'title' | 'status'> = req.body
    if(!BODY.title || !BODY.status){
        res.status(401).json({
            status : 401,
            errorMessage : `Validation Error: Todo validation Failed: title:${BODY.title} and status:${BODY.status}`
        })
        return
    }
    const NewTodoModel = new TodoModel({
        title:BODY.title,
        status:BODY.status
    })

    const NEWTODO = await NewTodoModel.save()
    const UpdateAllTodoAfterSave = await TodoModel.find()
    res.status(201).json({
        message: 'Todo Successfuly added',
        addedTodo : NEWTODO,
        allTodoAfterAddition : UpdateAllTodoAfterSave
    })
}

export const updateTodo = async(req: Request, res: Response): Promise<void> =>{
    const {params: {id}, body} = req
    if(!body.title || !body.status || !id){
        res.status(401).json({
            status : 401,
            errorMessage : `Validation Error: _id or required body properties is not defined`
        })
        return
    }
    const updateTodo = await TodoModel.findByIdAndUpdate({ _id : id }, body)
    const updatedAllTodosAfterUpdate = await TodoModel.find()

    if(!updateTodo){
        res.status(501).json({
            status : 501, 
            errorMessage : 'Edit todo Failed. Not implemented'
        })
        return
    }
    res.status(201).json({
        message: 'Todo Successfully edited',
        updateTodo,
        todos:updatedAllTodosAfterUpdate
    })
}