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
.app {
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.title {
  text-align: center;
  color: #333;
}

import { TodoItem } from './TodoItem';
import styles from './TodoList.module.css';

export const TodoList = ({ todos = [] }) => {
  return (
    <div>
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
.todoList {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

import styles from './TodoItem.module.css';

export const TodoItem = ({ todo }) => {
  return (
    <li className={styles.todoItem}>
      <span className={todo.completed ? styles.completed : ""}>
        {todo.text}
      </span>
    </li>
  );
};
.todoItem {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

.completed {
  text-decoration: line-through;
  color: #888;
}
