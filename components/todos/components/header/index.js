import React, { useRef } from 'react';
import './index.scss';

const ENTER_KEY = 13;

export const Header = ({ addTodo }) => {
  const inputRef = useRef(null);

  const submitTodo = (e) => {
    if (e.keyCode !== ENTER_KEY) return;

    e.preventDefault();
    const value = inputRef.current.value;
    if (value) {
      addTodo(value);
      inputRef.current.value = '';
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        ref={inputRef}
        onKeyDown={submitTodo}
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
};

export default Header;
