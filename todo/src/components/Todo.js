import React from 'react'

const Todo = (props) => {
const { setTodoCompleted, todo : { task, id, completed } } = props;

  const handleClick = () => {
    setTodoCompleted(id);
  }

  return (
    <div onClick={handleClick}
    className={`todo ${completed? "strike":""}`}>
      <h3>{task}</h3>
    </div>
  )
}

export default Todo
