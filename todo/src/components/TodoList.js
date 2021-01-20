import React from 'react'

import Todo from './Todo';

const TodoList = (props) => {
  const { handleClearCompleted, handleSetTodoCompleted } = props;


  const handleClick = () => {
    handleClearCompleted();
  }
  return (
    <div className='todoList'>
        {props.todos.map(todo => {
          return <Todo key={todo.id}
          todo={todo}
          handleClearCompleted={handleClearCompleted}
          handleSetTodoCompleted={handleSetTodoCompleted}
          />
        })}
        <button onClick={handleClick}>Clear Completed Todos</button>
    </div>
  )
}

export default TodoList;
