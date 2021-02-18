import React from 'react';

export default function TodoList({ children: todos = [] }) {
  if (todos.length === 0) {
    return <p>Nenhuma tarefa cadastrada</p>;
  }

  return (
    <div
      style={{
        padding: '10px',
        border: '1px solid lightgray',
        borderRadius: '4px',
      }}
    >
      {todos}
    </div>
  );
}
