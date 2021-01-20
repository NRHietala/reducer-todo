import React, { useState, useReducer } from 'react'

function TodoForm(props) {
// const [ state, dispatch ] = useReducer(reduced, initialState)
const [ inputValue, setInputValue ] = useState("");

const { handleAddTodo } = props;

const handleChange = e => {
  setInputValue(e.target.value)
};

  const handleSubmit = e => {
    e.preventDefault();
    handleAddTodo(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    name="todo"
    placeholder="Enter a new todo"
    onChange={handleChange}
    value={inputValue}
    />
    <button>Add Chore</button>
  </form>
  )
}

export default TodoForm;
