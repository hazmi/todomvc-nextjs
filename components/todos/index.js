import React  from 'react';
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';
import "./index.scss";

export const Todos = ({
  filterActive = "all",
  todos = [],
  dispatch
}) => {

  const addTodo = (value) => {
    dispatch({
      type: 'add',
      id: '_' + Math.random().toString(36).substr(2, 9),
      value
    });
  };

  const editTodo = (id, value) => {
    dispatch({ type: 'edit', id, value });
  };

  const removeTodo = (id) => {
    dispatch({ type: 'remove', id });
  };

  const toggleCompleted = (id, completed) => {
    dispatch({ type: 'toggleCompleted', id, completed });
  };

  const clearCompleted = (id) => {
    dispatch({ type: 'clearCompleted' });
  };

  const toggleAll = (completed) => {
    dispatch({ type: 'toggleAll', completed });
  };

  const filteredTodos = todos.filter((todo) => {
    switch (filterActive) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <Main
        data={filteredTodos}
        editTodo={editTodo}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
        toggleAll={toggleAll}
      />
      <Footer
        data={todos}
        clearCompleted={clearCompleted}
        filterActive={filterActive}
      />
    </section>
  );
};

export default Todos;
