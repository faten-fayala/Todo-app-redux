import {ADD_TODO} from "./type"
import {REMOVE_TODO} from "./type"
import {CHANGE_TODO , UPDATE_TODO} from "./type"
import {EDIT_TODO} from "./type"
export const addTodo=(newTodo)=>{
    return{
    type: ADD_TODO,
    payload : newTodo
    }
}
export const removeTodo=(id)=>{
    return{
    type: REMOVE_TODO,
    payload : id
    }
}
export const changeTodo=(id)=>{
    return{
    type: CHANGE_TODO,
    payload : id
    }
}
export const EditTodo=(id)=>{
    return{
    type: EDIT_TODO,
    payload : id
    }
}

export const UpdateTodo=(id,text)=>{
    return{
    type: UPDATE_TODO,
    payload : {id,text}
    }
}