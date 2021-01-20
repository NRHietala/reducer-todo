import React from 'react'

const Todo = (props) => {
const { handleSetTodoCompleted, todo : { task, id, completed } } = props;

  const handleClick = () => {
    handleSetTodoCompleted(id);
  }

  return (
    <div onClick={handleClick}
    className={`todo ${completed? "strike":""}`}>
      <h3>{task}</h3>
    </div>
  )
}

export default Todo
