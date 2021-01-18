import './App.css';
import React, { useState } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const initialTodos = [
  {
  task: 'Pet Porcupine',
  id: Date.now(),
  completed: false
},
{
  task: 'Walk Elephant',
  id: Date.now(),
  completed: false
},
]

function App() {
  const [ todos, setTodos ] = useState(initialTodos)
    
  return (
    <div className="App">
        <h2>useReducer Todo App</h2>
        <TodoForm />
        <TodoList 
        todos={todos}
        />
    </div>
  );
}

export default App;
