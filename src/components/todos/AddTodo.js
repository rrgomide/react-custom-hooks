import React from 'react';

export default function AddTodo({ onAddTodo = () => {} }) {
  const [text, setText] = React.useState('');

  function handleTextChange({ currentTarget }) {
    setText(currentTarget.value);
  }

  function handleNewTodo(event) {
    event.preventDefault();

    if (text.trim() !== '') {
      onAddTodo(text);
    }

    setText('');
  }

  return (
    <div
      style={{
        padding: '10px',
        marginTop: '10px',
        border: '1px solid lightgray',
        borderRadius: '4px',
      }}
    >
      <form onSubmit={handleNewTodo}>
        <div className="input-field">
          <input
            autoFocus
            id="input-text"
            type="text"
            value={text}
            onChange={handleTextChange}
          />

          <label htmlFor="input-text" className="active">
            Nova todo:
          </label>
        </div>
      </form>
    </div>
  );
}
