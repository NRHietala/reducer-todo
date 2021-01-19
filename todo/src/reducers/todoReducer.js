

export const initialState = [
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
];

export const reducer = (state, action ) => {
  switch(action.type) {
    case("SET_TODO"):
      return ({ ...state, task: action.payload });
    case("SET_TODO_STRIKE"):
      return (state);
    case("CLEAR_COMPLETED"):
      return(state);
    default:
      return(state);
  }
}
