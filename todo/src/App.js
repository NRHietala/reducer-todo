import './App.css';
import React, { useReducer } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { reducer, initialState } from './reducers/todoReducer';
import { setTodo } from './actions/todoActions';


function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  

  
  const setTodoCompleted = todoId => {
    dispatch(setTodoCompleted(todoId))
  }

  const addTodo = todoName => {
    dispatch(setTodo(todoName))
    };

  // const filterCompletedTodos = () => {
  //   const newTodos = todos.filter(todo => {
  //     return (!todo.completed)
  //   });
  //   setTodos(newTodos);
  // }

    console.log(state)
  return (
    <div className="App">
        <h2>useReducer Todo App</h2>
        {/* <button onClick={handleClick}>test button</button> */}
        <TodoForm 
        addTodo={addTodo}
        />
        <TodoList 
        todos={state.todos}
        // filterCompletedTodos={filterCompletedTodos}
        setTodoCompleted={setTodoCompleted}
        />
    </div>
  );
}

export default App;
