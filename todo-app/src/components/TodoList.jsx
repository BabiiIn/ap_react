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
