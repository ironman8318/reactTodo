import * as actionTypes from "./action";


export const addTodo = (todo) => {
    console.log("BAZINGA")
    return {
        type : actionTypes.ADD_TODO,
        todo : todo,
    }
}

export const setEditData = (todoId) => {
    return{
        type : actionTypes.SET_EDIT_DATA,
        todoId : todoId,
    }
}

export const editTodo = (todo) => {
    return{
        type : actionTypes.EDIT_TODO,
        todo : todo,
    }
}


export const deleteTodo = (todoId) => {
    return{
        type : actionTypes.DELETE_TODO,
        todoId : todoId,
    }
}