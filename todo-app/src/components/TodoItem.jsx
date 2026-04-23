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
