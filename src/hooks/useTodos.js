import React from 'react';
import { v4 as uuid } from 'uuid';

const INITIAL_TODOS = [
  {
    id: uuid(),
    description: 'Estudar React',
    completed: false,
  },

  {
    id: uuid(),
    description: 'Estudar Angular',
    completed: false,
  },

  {
    id: uuid(),
    description: 'Estudar Vue',
    completed: true,
  },
];

function todosReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TODO': {
      return [...state, { id: uuid(), description: payload, completed: false }];
    }

    case 'REMOVE_TODO': {
      return state.filter(({ id }) => id !== payload);
    }

    case 'EDIT_TODO': {
      const newTodos = [...state];
      const index = newTodos.findIndex(({ id }) => id === payload.id);
      newTodos[index].description = payload.description;

      return [...newTodos];
    }

    case 'TOGGLE_TODO': {
      const newState = [...state];
      const index = state.findIndex(({ id }) => id === payload.id);
      newState[index].completed = payload.completed;

      return [...newState];
    }

    default: {
      return [...state];
    }
  }
}

export default function useTodos() {
  const [todos, dispatch] = React.useReducer(todosReducer, INITIAL_TODOS);

  const addTodo = todoDescription => {
    dispatch({
      type: 'ADD_TODO',
      payload: todoDescription,
    });
  };

  const removeTodo = todoId => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: todoId,
    });
  };

  const editTodo = (id, description) => {
    dispatch({
      type: 'EDIT_TODO',
      payload: { id, description },
    });
  };

  const toggleTodo = (id, completed) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: { id, completed },
    });
  };

  return { todos, addTodo, removeTodo, editTodo, toggleTodo };
}
