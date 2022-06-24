import { useReducer } from 'react';

const initialState = { count: 0 };

type ACTION_TYPE =
  | { type: 'increment', payload: number }
  | { type: 'decrement', payload: number };

function reducer(state: typeof initialState, action: ACTION_TYPE) {
  switch (action.type) {
    case 'decrement':
      return { count: state.count + action.payload }
    case 'increment':
      return { count: state.count - action.payload }
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div>
    <button onClick={() => dispatch({ type: 'decrement', payload: 2 })}></button>
    <button onClick={() => dispatch({ type: 'increment', payload: 2 })}></button>
    <div>{state.count}</div>
  </div>;
}