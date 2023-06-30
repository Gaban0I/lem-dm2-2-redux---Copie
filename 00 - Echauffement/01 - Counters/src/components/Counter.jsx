import React, { useState } from "react";

import PropTypes from 'prop-types'

Counter.propTypes = {
  demarrage: PropTypes.number
}

function Counter({ onDelete, compteur }) {
  const [counter, setCounter] = useState(compteur.demarrage ?? 0)

  return (
    <div className="counter">
      <span>{counter}</span>
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
      <button onClick={() => setCounter((c) => c - 1)}>-</button>
      <button onClick={() => onDelete(compteur)}>X</button>
    </div>
  );
}

export default Counter;
