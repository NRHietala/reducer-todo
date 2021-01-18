import React from 'react'

function TodoForm() {

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
