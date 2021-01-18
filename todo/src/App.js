import './App.css';
import React, { useState, useReducer } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import reducer from './reducers/todoReducer';

const initialState = [
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
];

function App() {
  const [ todos, setTodos ] = useState(initialState)
  // const [ state, dispatch ] = useReducer(reducer, initialState)
    
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
