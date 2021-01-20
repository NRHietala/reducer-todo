export const SET_TODO = "SET_TODO";
export const SET_TODO_COMPLETED = "SET_TODO_COMPLETED";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const setTodo = newTodo => {
  return ({ type: SET_TODO, payload: newTodo });
};

export const setTodoCompleted = todoId => {
  return ({ 
    type: SET_TODO_COMPLETED,
    payload: todoId
  });
};

export const clearCompleted = () => {
  return ({ type: CLEAR_COMPLETED})
}