import React, { useState, useReducer } from 'react'

function TodoForm(props) {
// const [ state, dispatch ] = useReducer(reduced, initialState)
const [ inputValue, setInputValue ] = useState("");

const { addTodo } = props;

const handleChange = e => {
  setInputValue(e.target.value)
  console.log(inputValue)
}

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(inputValue)
    setInputValue("")

  }

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

export default TodoForm
