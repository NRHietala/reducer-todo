import {
  SET_TODO,
  SET_TODO_COMPLETED,
  CLEAR_COMPLETED
}
from '../actions/todoActions';

export const initialState = {
  todos:[
  {
  task: 'Pet Porcupine',
  id: 1,
  completed: false
},
{
  task: 'Walk Elephant',
  id: 2,
  completed: false
},
  ]
};

export const reducer = (state = initialState, action ) => {
  switch(action.type) {
    case SET_TODO :
    const newTodo = {
      task: action.payload,
      id: state.todos.length,
      completed: false
    };
      return ({ ...state, todos: [...state.todos, newTodo]});

    case(SET_TODO_COMPLETED):
      return ({ ...state, todos: state.todos.map(todo => {
        if(todo.id === action.payload) {
          return ({...todo, completed: !todo.completed})
        } else {
          return todo;
        }
      })});

    case CLEAR_COMPLETED:
      return {
        ...state,
        todos:state.todos.filter(todo => {
          return (!todo.completed)
        })
      };
    default:
      return(state);
  }
}
