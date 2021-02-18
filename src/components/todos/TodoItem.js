import React from 'react';

export default function TodoItem({
  children: todo,
  onEdit = () => {},
  onRemove = () => {},
  onToggle = () => {},
}) {
  const [todoDescription, setTodoDescription] = React.useState(
    todo.description
  );

  function handleTodoChange(event) {
    event.preventDefault();

    onEdit(todo.id, todoDescription);
  }

  function handleDescriptionChange({ currentTarget }) {
    const newDescription = currentTarget.value;
    setTodoDescription(newDescription);
  }

  function handleRemoveTodo() {
    onRemove(todo.id);
  }

  function handleToggleTodo() {
    onToggle(todo.id, !todo.completed);
  }

  const icon = todo.completed ? 'check_circle' : 'radio_button_unchecked';

  const { toggleTodoStyle } = styles;

  const todoIconStyle = todo.completed
    ? { ...toggleTodoStyle, color: 'darkgreen' }
    : { ...toggleTodoStyle, color: 'darkred' };

  const todoStyle = todo.completed ? { textDecoration: 'line-through' } : {};

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <span
        style={todoIconStyle}
        className="material-icons"
        onClick={handleToggleTodo}
      >
        {icon}
      </span>

      <form onSubmit={handleTodoChange} style={{ flex: 1 }}>
        <div className="input-field">
          <input
            style={todoStyle}
            type="text"
            value={todoDescription}
            readOnly={todo.completed}
            onChange={handleDescriptionChange}
            onBlur={handleTodoChange}
          />
        </div>
      </form>

      <span
        style={{ ...toggleTodoStyle, color: 'darkred' }}
        className="material-icons"
        onClick={handleRemoveTodo}
      >
        clear
      </span>
    </div>
  );
}

const styles = {
  toggleTodoStyle: {
    cursor: 'pointer',
    fontWeight: 'bold',
    marginRight: '5px',
  },
};
