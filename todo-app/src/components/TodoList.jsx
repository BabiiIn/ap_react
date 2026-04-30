import { TodoItem } from './TodoItem';
import styles from './TodoList.module.css';

export const TodoList = ({ todos = [], onDelete, onToggle }) => {
  return (
    <div>
      {todos.length > 0 ? (
        <ul className={styles.todoList}>
          {todos.map((todo, index) => (
            <li key={todo.id} className={styles.todoLine}>
              <TodoItem todo={todo} index={index} onDelete={onDelete} onToggle={onToggle} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет задач</p>
      )}
    </div>
  );
};
