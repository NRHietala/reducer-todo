import React, { useReducer } from 'react'

function TodoForm() {
// const [ state, dispatch ] = useReducer(reduced, initialState)

  const handleSubmit = () => {
    console.log("submit")
  }

  return (
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    name="todo"
    placeholder="Enter a new todo"
    // onChange={handleChange}
    // value={this.state.inputValue}
    />
    <button>Add Chore</button>
  </form>
  )
}

export default TodoForm
