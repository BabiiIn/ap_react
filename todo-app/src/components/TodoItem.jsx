import { useState } from 'react';
import styles from './TodoItem.module.css';

export const TodoItem = ({ todo, index, onDelete, onToggle }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleDeleteClick = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onDelete(todo.id);
    }, 300); // время совпадает с transition в CSS
  };

  return (
    <div className={`${styles.todoItem} ${isRemoving ? styles.fadeOut : ''}`}>
      <span
        onClick={onToggle}
        className={todo.completed ? styles.completed : styles.text}
      >
        <span
          className={`${styles.number} ${
            todo.completed ? styles.numberCompleted : styles.numberActive
          }`}
        >
          {index + 1}
        </span>
        {todo.text}
      </span>

      <div className={styles.actions}>
        <button
          className={styles.toggleButton}
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed ? 'Сделать невыполненной' : 'Выполнено'}
        </button>
        <button
          className={styles.deleteButton}
          onClick={handleDeleteClick}
          aria-label="Удалить задачу"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
