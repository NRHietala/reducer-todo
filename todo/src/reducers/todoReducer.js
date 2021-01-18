

export const initialState = [
  {
  task: 'Pet Porcupine',
  id: Date.now(),
  completed: false
},
{
  task: 'Walk Elephant',
  id: Date.now(),
  completed: false
},
];

export const reducer = (state, action ) => {
  switch(action.type) {
    case("ADD_TODO"):
      return (state);
    case("STRIKE_TODO"):
      return (state);
    case("CLEAR_COMPLETED"):
      return(state);
    default:
      return(state);
  }
}