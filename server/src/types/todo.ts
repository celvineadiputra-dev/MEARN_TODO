import {Document} from 'mongoose'

export interface Todo extends Document{
    title : String,
    status : 'Completed' | 'Uncompleted'
}