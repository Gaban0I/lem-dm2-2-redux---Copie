import React, { useReducer } from 'react';

import data from './_data';

import TodoList from './components/TodoList';
import FormAddTodo from './components/FormAddTodo';

// TODO: Importez ici le "todoReducer"
import todoReducer from './reducers/todoReducer';
// TODO: Importez ici le "TodoContext"
import TodoContext from './contexts/todoContext';

function TodoApp() {
  // TODO: Utilisez ici le hook useReducer() avec le "todoReducer" pour récupérer le state
  const [state, dispatch] = useReducer(todoReducer, data);

    const total = state.length;
    const nbDones = state.filter(t => t.isDone).length

  return (
    <div style={{ margin: '1rem' }}>
      <h1>Todolist Reducer App</h1>

      {/* // TODO: Afficher les bonnes informations en fonction du state */}
      <p>
        <strong>{nbDones}/{total} effectuées</strong>
      </p>

      {/* TODO: Enrobez ici les deux composant par le Provider du TodoContext,
            et passez comme valeur le 'state' et la fonction de 'dispatch' */}
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoList todos={state} />
        <FormAddTodo />
      </TodoContext.Provider>
    </div>
  );
}

export default TodoApp;
