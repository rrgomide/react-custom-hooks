import React from 'react';
import AddTodo from '../components/todos/AddTodo';
import TodoItem from '../components/todos/TodoItem';
import TodoList from '../components/todos/TodoList';
import useTodos from '../hooks/useTodos';

export default function TodoPage() {
  const { todos, addTodo, removeTodo, editTodo, toggleTodo } = useTodos();

  function handleAddTodo(todoDescription) {
    addTodo(todoDescription);
  }

  function handleRemoveTodo(todoId) {
    removeTodo(todoId);
  }

  function handleEditTodo(id, description) {
    editTodo(id, description);
  }

  function handleToggleTodo(id, completed) {
    toggleTodo(id, completed);
  }

  return (
    <div className="container">
      <h2 className="center">Todo List</h2>

      <TodoList>
        {todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              onEdit={handleEditTodo}
              onRemove={handleRemoveTodo}
              onToggle={handleToggleTodo}
            >
              {todo}
            </TodoItem>
          );
        })}
      </TodoList>

      <AddTodo onAddTodo={handleAddTodo} />
    </div>
  );
}
