import { useState } from 'react';
import { TodoList } from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import { useRef } from 'react';

const initial = [
  { id: uuidv4(), text: 'Выучить React', completed: false },
  { id: uuidv4(), text: 'Сделать todo app', completed: true },
  { id: uuidv4(), text: 'Проверить зачёркивание', completed: true },
];

export function App() {
  const [todos, setTodos] = useState(initial);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim() || inputValue.length < 2) {
      setError('Введите хотя бы 2 символа');
      setInputValue('');
      inputRef.current?.focus();
      return;
    }

    setTodos([...todos, { id: uuidv4(), text: inputValue, completed: false }]);
    inputRef.current?.focus();
    setError('');
    setInputValue('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>What to do</h1>
      <div className={styles.counter}>
        Всего задач: {total}
        <span className={styles.completedCount}>, выполнено: {completed}</span>
      </div>
      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onToggle={toggleCompleted}
      />
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="todo-input">Введите новую задачу</label>
        <input
          ref={inputRef}
          id="todo-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Добавить</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}
