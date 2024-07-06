import { useReducer } from 'react';
import { useState } from 'react';

function reducer(state, action) {
  if (action.type == 'decrease') {
    return state - action.data;
  } else if (action.type == 'increase') {
    return state + action.data;
  }
}

export default function B() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h4>{count}</h4>
      <div>
        <button
          onClick={() => {
            dispatch({
              type: 'decrease',
              data: 1,
            });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'increase',
              data: 1,
            });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
