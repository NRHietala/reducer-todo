import './App.css';
import React, { useState, useReducer } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { reducer, initialState } from './reducers/todoReducer';


function App() {
  // const [ state, dispatch ] = useReducer(reducer, initialState);
  const [ todos, setTodos ] = useState(initialState);

  
  const setTodoCompleted = todoId => {
    setTodos(todos.map(todo => {
      if(todo.id === todoId) {
        return {
          ...todo, 
          completed:!todo.completed
        }
      }
      return todo;
    }));
  }

  const addTodo = todoName => {
    const addedTodo = {
      task:todoName,
      id:Date.now(),
      completed:false
    };

    const updatedTodos = [...todos, addedTodo];

    setTodos(updatedTodos);
    console.log(updatedTodos)
    console.log(todos)
  }

  const filterCompletedTodos = () => {
    const newTodos = todos.filter(todo => {
      return (!todo.completed)
    });
    setTodos(newTodos);
  }
    
  return (
    <div className="App">
        <h2>useReducer Todo App</h2>
        <TodoForm addTodo={addTodo}/>
        <TodoList 
        todos={todos}
        filterCompletedTodos={filterCompletedTodos}
        setTodoCompleted={setTodoCompleted}
        />
    </div>
  );
}

export default App;
