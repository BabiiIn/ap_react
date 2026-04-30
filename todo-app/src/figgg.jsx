import styles from './TodoItem.module.css';

export const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className={styles.todoItem}>
      <span
        onClick={onToggle}
        className={todo.completed ? styles.completed : styles.text}
      >
        {todo.text}
      </span>

      <div className={styles.actions}>
        <button className={styles.toggleButton} onClick={onToggle}>
          {todo.completed ? 'Сделать невыполненной' : 'Выполнено'}
        </button>
        <button
          className={styles.deleteButton}
          onClick={onDelete}
          aria-label="Удалить задачу"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
import { TodoItem } from './TodoItem';
import styles from './TodoList.module.css';

export const TodoList = ({ todos = [], onDelete, onToggle }) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.todoLine}>
          <TodoItem
            todo={todo}
            onDelete={() => onDelete(todo.id)}
            onToggle={() => onToggle(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};
/todo-app/src/components/App.module.css
.app {
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  color: #333;
}
.form {
  margin-top: 16px;
  display: flex;              /* элементы в строку */
  align-items: center;        /* выравнивание по вертикали */
  gap: 8px;   
}

.form label {
  flex: 0 0 140px;            /* фиксированная ширина для подписи */
  font-weight: 500;
  color: #555;
}

.form input {
  flex: 1;                    /* занимает всё оставшееся место */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form button {
  flex: 0 0 auto;             /* кнопка имеет свою ширину */
  padding: 8px 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.form button:hover {
  background-color: #0056b3;
}

.error {
  color: #d9534f; /* Красный цвет, но не слишком яркий */
  font-size: 0.9rem; /* Чуть меньше основного текста */
  margin-top: 4px; /* Отступ сверху, чтобы не прилипало к инпуту */
  font-weight: 500; /* Немного выделить */
}
/todo-app/src/components/TodoItem.module.css
.todoItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  border-bottom: 1px solid #eee;
}

.text,
.completed {
  width: 200px; /* фиксированная ширина колонки текста */
  text-align: left; /* текст всегда прижат к левому краю */
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.actions {
  display: flex;
  gap: 8px;
}

.toggleButton {
  background: none;
  border: 1px solid #ccc;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.toggleButton:hover {
  background: #f0f0f0;
}

.deleteButton {
  background: none;
  border: none;
  color: #888;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.deleteButton:hover {
  color: #e74c3c;
}
todo-app/src/components/TodoList.module.css
import { TodoItem } from './TodoItem';
import styles from './TodoList.module.css';

export const TodoList = ({ todos = [], onDelete, onToggle }) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.todoLine}>
          <TodoItem
            todo={todo}
            onDelete={() => onDelete(todo.id)}
            onToggle={() => onToggle(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};
