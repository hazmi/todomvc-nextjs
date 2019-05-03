import React from 'react';
import { TodoList } from './components/todo-list';
import { ToggleAll } from './components/toggle-all';
import "./index.scss";

export const Main = ({
  data = [],
  editTodo,
  removeTodo,
  toggleCompleted,
  toggleAll
}) => (
  <section className="main">
    <ToggleAll
      toggleAll={toggleAll}
    />
    <TodoList
      data={data}
      editTodo={editTodo}
      removeTodo={removeTodo}
      toggleCompleted={toggleCompleted}
    />
  </section>
);

export default Main;
