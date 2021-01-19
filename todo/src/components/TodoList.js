import React from 'react'

import Todo from './Todo';

const TodoList = (props) => {
  const { todos, filterCompletedTodos, setTodoCompleted } = props;

  const handleClick = () => {
    filterCompletedTodos();
  }
  return (
    <div className='todoList'>
        {todos.map(todo => {
          return <Todo key={todo.id}
          todo={todo}
          filterCompletedTodos={filterCompletedTodos}
          setTodoCompleted={setTodoCompleted}
          />
        })}
        <button onClick={handleClick}>Clear Completed Todos</button>
    </div>
  )
}

export default TodoList
