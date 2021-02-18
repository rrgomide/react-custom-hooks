import React from 'react';

const INITIAL_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const INITIAL_STATE = {
  primitiveValues: INITIAL_VALUES,
  values: getShufflableValues(INITIAL_VALUES),
  currentShuffledValue: null,
  error: '',
  canShuffle: true,
};

function getShufflableValues(values) {
  return values.map(value => ({ value, picked: false }));
}

/**
 * Fonte: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
 */
function shuffle(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function allPicked(values) {
  return values.every(value => value.picked);
}

function doShuffle(primitiveValues, values) {
  if (!isUnique(primitiveValues)) {
    throw new Error('Os valores a serem sorteados devem ser únicos');
  }

  if (allPicked(values)) {
    throw new Error('Todos os valores já foram sorteados');
  }

  let shuffledIndex = null;

  do {
    shuffledIndex = shuffle(0, values.length);
  } while (values[shuffledIndex].picked);

  return shuffledIndex;
}

function shuffleReducer(state, action) {
  const { type, payload } = action;
  const { values, currentShuffledValue } = state;

  switch (type) {
    case 'ERROR': {
      return {
        ...state,
        currentShuffledValue: null,
        error: payload,
      };
    }

    case 'RESTART': {
      const newState = { ...state };
      newState.values.forEach(value => (value.picked = false));
      newState.currentShuffledValue = null;
      newState.error = '';
      newState.canShuffle = true;

      return {
        ...newState,
      };
    }

    case 'DO_SHUFFLE': {
      try {
        const shuffledIndex = doShuffle(state.primitiveValues, state.values);

        const newState = { ...state };
        newState.currentShuffledValue = newState.values[shuffledIndex];
        newState.error = '';

        return { ...newState };
      } catch (error) {
        return { ...state, error };
      }
    }

    case 'CONFIRM_SHUFFLE': {
      const shuffledIndex = values.findIndex(
        value => value === currentShuffledValue
      );

      const newState = { ...state };
      newState.values[shuffledIndex].picked = true;
      newState.currentShuffledValue = null;
      newState.error = '';

      const canShuffle =
        newState.values.length !== newState.values.filter(v => v.picked).length;

      return { ...newState, canShuffle };
    }

    default: {
      return { ...state };
    }
  }
}

function isUnique(values) {
  return values.length === new Set(values).size;
}

export default function useShuffle(initialValues = INITIAL_VALUES) {
  const [
    { values, currentShuffledValue, canShuffle, error },
    dispatch,
  ] = React.useReducer(shuffleReducer, {
    ...INITIAL_STATE,
    primitiveValues: initialValues,
    values: getShufflableValues(initialValues),
  });

  const doShuffle = () => {
    try {
      dispatch({ type: 'START_SHUFFLE' });
      dispatch({ type: 'DO_SHUFFLE' });
      dispatch({ type: 'END_SHUFFLE' });
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error });
    }
  };

  const doConfirmShuffle = () => {
    dispatch({ type: 'CONFIRM_SHUFFLE' });
  };

  const doRestart = () => {
    dispatch({ type: 'RESTART' });
  };

  return {
    values,
    currentShuffledValue,
    error,
    canShuffle,
    doShuffle,
    doConfirmShuffle,
    doRestart,
  };
}
