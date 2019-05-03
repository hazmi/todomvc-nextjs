import React from 'react';
import { Todo } from './components/todo';
import './index.scss';

export const TodoList = ({
  data = [],
  editTodo,
  removeTodo,
  toggleCompleted
}) => (
  <ul className="todo-list">
    {data.map((item) => (
      <Todo
        key={item.id}
        completed={item.completed}
        handleEdit={value => editTodo(item.id, value)}
        handleRemove={() => removeTodo(item.id)}
        handleToggle={() => toggleCompleted(item.id, !item.completed)}
      >
        {item.value}
      </Todo>
    ))}
  </ul>
);

export default TodoList;
