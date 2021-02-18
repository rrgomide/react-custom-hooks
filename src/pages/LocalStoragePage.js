import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { v4 as uuid } from 'uuid';

const INITIAL_TASKS = [
  {
    id: uuid(),
    description: 'Estudar "Epic React"',
  },

  {
    id: uuid(),
    description: 'Estudar "Testing JavaScript"',
  },
];

export default function LocalStoragePage() {
  const [tasks, setTasks] = useLocalStorage('tasks', [...INITIAL_TASKS]);
  const [newTask, setNewTask] = React.useState('');
  const inputRef = React.useRef();

  function handleTaskChange({ currentTarget }) {
    setNewTask(currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setTasks([...tasks, { id: uuid(), description: newTask }]);
    setNewTask('');
    inputRef.current.focus();
  }

  return (
    <div className="container">
      <h2 className="center">Exemplo com localStorage</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            ref={inputRef}
            autoFocus
            id="input-task"
            type="text"
            value={newTask}
            onChange={handleTaskChange}
          />
          <label htmlFor="input-task" className="active">
            Nova pendência:
          </label>
        </div>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
}
