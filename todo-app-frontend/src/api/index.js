
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const apiBaseUrl = "http://localhost:1337"

export const createBoards=async(boards)=>{
    return await axios.post(apiBaseUrl+"/api/boards",{...boards,boardId:uuidv4(),todoId:uuidv4()})
}

export const createTodo=async(boards)=>{
    return await axios.post(apiBaseUrl+"/api/todo",{...boards,todoId:uuidv4()})
}

export const deleteBoard=async(boardId)=>{
    return await axios.delete(apiBaseUrl+"/api/boards/"+boardId)
}

export const deleteTodo=async(todoId)=>{
    return await axios.delete(apiBaseUrl+"/api/todo/"+todoId)
}

export const makeTodoComplete=async(todoId)=>{
    return await axios.put(apiBaseUrl+"/api/todo/"+todoId)
}