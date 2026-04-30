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
        <button className={styles.toggleButton} onClick={() => onToggle(todo.id)}>
          {todo.completed ? 'Сделать невыполненной' : 'Выполнено'}
        </button>
        <button
          className={styles.deleteButton}
          onClick={() => onDelete(todo.id)}
          aria-label="Удалить задачу"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
