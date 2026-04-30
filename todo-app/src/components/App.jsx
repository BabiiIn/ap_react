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
  const [filter, setFilter] = useState('all');

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

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // all
  });
  const filteredCount = filteredTodos.length;

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>What to do</h1>
      <div className={styles.filters}>
        <button
          className={filter === 'all' ? styles.active : ''}
          onClick={() => setFilter('all')}
        >
          Все
        </button>
        <button
          className={filter === 'active' ? styles.active : ''}
          onClick={() => setFilter('active')}
        >
          Активные
        </button>
        <button
          className={filter === 'completed' ? styles.active : ''}
          onClick={() => setFilter('completed')}
        >
          Выполненные
        </button>
      </div>

      <div className={styles.counter}>
        Всего задач: {filteredCount}
        {filter === 'all' && (
          <span className={styles.completedCount}>
            , выполнено: {completed}
          </span>
        )}
      </div>
      <TodoList
        todos={filteredTodos}
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
