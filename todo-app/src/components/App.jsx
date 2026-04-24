import { useState } from 'react';
import { TodoList } from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import { useRef } from 'react';

const initial = [
  { id: 1, text: 'Выучить React', completed: false },
  { id: 2, text: 'Сделать todo app', completed: true },
  { id: 3, text: 'Проверить зачёркивание', completed: true },
];

export function App() {
  // const [nextId, setNextId] = useState(4);
  const [todos, setTodos] = useState(initial);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim() || inputValue.length < 2) {
      setError('Введите хотя бы 2 символа');
      setInputValue('');
      return;
    }

    setTodos([...todos, { id: uuidv4(), text: inputValue, completed: false }]);
    inputRef.current.focus();
    setError('');
    setInputValue('');
    // setNextId((prev) => prev + 1);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>What to do</h1>
      <TodoList todos={todos} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-input">Введите новую задачу</label>
        <input
          ref={inputRef}
          id="todo-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>

        <button>Добавить</button>
        <div>{error && <p className={styles.error}>{error}</p>}</div>
      </form>
    </div>
  );
}
