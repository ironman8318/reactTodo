import * as actionTypes from "../actions/action"

const initialState = {
    todos : [],
    editTodoData : null,
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.ADD_TODO:
            let todo =action.todo;
            let newTodos = state.todos.concat(todo);
            return {...state,
                    todos : newTodos,
                   }
        case actionTypes.DELETE_TODO:
            let updatedTodos = state.todos.filter(el => el.id !== action.todoId);
            return {...state,
                    todos : updatedTodos,
                   }
        case actionTypes.SET_EDIT_DATA:
            let editTodo  = state.todos.find(el => el.id === action.todoId);
            return {...state,editTodoData :editTodo};
            
        case actionTypes.EDIT_TODO:
            const index = state.todos.findIndex(el => el.id === action.todo.id);
            const todoList = [...state.todos];
            todoList[index] = action.todo;
            return {...state,
                    todos : todoList,
                   editTodoData : null,}
        default : 
            return state;
    }
}

export default reducer;