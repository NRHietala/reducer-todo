import './App.css';
import React, { useReducer } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { reducer, initialState } from './reducers/todoReducer';
import { setTodo, setTodoCompleted, clearCompleted } from './actions/todoActions';


function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  

  // add handle
  const handleSetTodoCompleted = todoId => {
    dispatch(setTodoCompleted(todoId))
  }

  const handleAddTodo = todoName => {
    dispatch(setTodo(todoName))
    };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  }

    console.log(state)
  return (
    <div className="App">
        <h2>useReducer Todo App</h2>
        <TodoForm 
        handleAddTodo={handleAddTodo}
        />
        <TodoList 
        todos={state.todos}
        handleClearCompleted={handleClearCompleted}
        handleSetTodoCompleted={handleSetTodoCompleted}
        />
    </div>
  );
}

export default App;
