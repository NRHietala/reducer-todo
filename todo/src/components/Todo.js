import React from 'react'

const Todo = (props) => {
const { todo : { task, id, completed } } = props;
  const handleClick = () => {
    console.log('clicked');
  }
  return (
    <div onClick={handleClick}
    className={`todo ${completed? "strike":""}`}>
      <h3>{task}</h3>
    </div>
  )
}

export default Todo
