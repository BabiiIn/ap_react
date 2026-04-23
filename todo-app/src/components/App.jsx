import { useState } from 'react';
import { TodoList } from './TodoList';
import styles from './App.module.css';

const initial = [
  { id: 1, text: 'Выучить React', completed: false },
  { id: 2, text: 'Сделать todo app', completed: true },
  { id: 3, text: 'Проверить зачёркивание', completed: true },
];

export function App() {
  const [todos, setTodo] = useState(initial);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>What to do</h1>
      <TodoList todos={todos} />
    </div>
  );
}
