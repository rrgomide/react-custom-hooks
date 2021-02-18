import React from 'react';

const DEFAULT_STATE = {
  counter: 0,
  steps: 0,
  automatic: false,
  direction: '+',
  interval: 1000,
  by: 1,
  running: false,
};

function counterReducer(state, action) {
  const { counter, steps } = state;
  const { type, payload } = action;

  switch (type) {
    case 'SET_BY': {
      return {
        ...state,
        by: parseInt(payload, 10),
      };
    }

    case 'SET_INTERVAL': {
      return {
        ...state,
        interval: parseInt(payload, 10),
      };
    }

    case 'INCREMENT_BY': {
      return {
        ...state,
        counter: counter + parseInt(payload, 10),
        steps: steps + 1,
      };
    }

    case 'DECREMENT_BY': {
      return {
        ...state,
        counter: counter - parseInt(payload, 10),
        steps: steps + 1,
      };
    }

    case 'RESTART': {
      return {
        ...state,
        counter: 0,
        steps: 0,
        automatic: false,
      };
    }

    case 'AUTOMATIC': {
      return {
        ...state,
        automatic: true,
        direction: payload.direction,
        interval: payload.interval,
        by: payload.by,
      };
    }

    default: {
      return { ...state };
    }
  }
}

export function useCounter(initialValue = 0) {
  const [state, dispatch] = React.useReducer(counterReducer, {
    ...DEFAULT_STATE,
    counter: initialValue,
  });

  const { counter, steps, automatic, direction, interval, by } = state;

  React.useEffect(() => {
    if (!automatic) {
      return;
    }

    const myInterval = setInterval(() => {
      dispatch({
        type: direction === '+' ? 'INCREMENT_BY' : 'DECREMENT_BY',
        payload: by,
      });
    }, interval);

    return () => {
      clearInterval(myInterval);
    };
  }, [automatic, by, direction, interval]);

  const doIncrement = (by = 1) =>
    dispatch({ type: 'INCREMENT_BY', payload: by });

  const doDecrement = (by = 1) =>
    dispatch({ type: 'DECREMENT_BY', payload: by });

  const doAutoIncrement = (by = 1, interval = 1000) =>
    dispatch({ type: 'AUTOMATIC', payload: { by, direction: '+', interval } });

  const doAutoDecrement = (by = 1, interval = 1000) =>
    dispatch({ type: 'AUTOMATIC', payload: { by, direction: '-', interval } });

  const doRestart = () => dispatch({ type: 'RESTART' });

  const setBy = by => dispatch({ type: 'SET_BY', payload: by });

  const changeInterval = newInterval =>
    dispatch({ type: 'SET_INTERVAL', payload: newInterval });

  return {
    counter,
    steps,
    doIncrement,
    doDecrement,
    doRestart,
    doAutoIncrement,
    doAutoDecrement,
    setBy,
    changeInterval,
  };
}
