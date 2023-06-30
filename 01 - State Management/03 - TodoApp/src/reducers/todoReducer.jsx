// @TODO :
// Complétez ici le reducer afin qu'il puisse permettre d'ajouter et supprimer une todo du state
// …

/*
  [
    { id: "abc", title: 'Nourrir le chat'            , isDone: true },
    { id: "def", title: 'Faire les courses'          , isDone: false },
    { id: "ghi", title: 'Apprendre React'            , isDone: true },
    { id: "jkl", title: 'Apprendre les State Manager', isDone: false }
  ];
*/

export default function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return state.filter(({ id }) => id !== action.payload.id);
    case 'UPDATE_TODO':
      return state.map((todo) => {
        if (todo.id === action.payload.id) return action.payload;
        return todo;
      });
    default:
      return state;
  }
}
