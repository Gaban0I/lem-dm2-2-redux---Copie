import Counter from './components/Counter';
import { useState } from 'react';

const defaultState = [
  { id: 678, demarrage: 9 },
  { id: 768, demarrage: 8 },
  { id: 193, demarrage: 7 },
]

function App() {
  const [compteurs, setCompteurs] = useState(defaultState);

  return (
    <div className="App">
      <div className="actions">
        <button onClick={() => setCompteurs([...compteurs, { id: Date.now(), demarrage: 0 }])}>Ajouter un compteur</button>
        <button onClick={() => setCompteurs(compteurs.slice(0, -1))}>Supprimer un compteur</button>
      </div>

      <div className="counters-container">
        {compteurs.map((compteur, index) => (
          <Counter key={compteur.id} compteur={compteur} onDelete={deleteCompteur}/>
        ))}
      </div>
    </div>
  );

  function deleteCompteur(compteur) {
    console.log(compteur, 'invocation depuis <Counter>, exécution dans <App>')
    setCompteurs(compteurs.filter(c => c.id !== compteur.id))
  }
}

export default App;
