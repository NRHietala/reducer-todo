import React from 'react'

import Todo from './Todo';

const TodoList = (props) => {
  const { todos } = props;

  const handleClick = () => {
    console.log('click');
  }
  return (
    <div className='todoList'>
        {todos.map(todo => {
          return <Todo key={todo.id}
          todo={todo}
          />
        })}
        <button onClick={handleClick}>Clear Completed Chores</button>
    </div>
  )
}

export default TodoList
