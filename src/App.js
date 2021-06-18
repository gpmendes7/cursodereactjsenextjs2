import './App.css';

import { useReducer } from 'react';

export const globalState = {
  title: 'title',
  body: 'body',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda com', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }

  console.log('NENHUMMA ACTION ENCONTRADA...');
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  // eslint-disable-next-line no-unused-vars
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleString('pt-BR') })}>Click</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Invert</button>
      <button onClick={() => dispatch({ type: 'QUALQUERCOISA' })}>SEM ACTION</button>
    </div>
  );
}

export default App;
