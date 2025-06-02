import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import Todo from './Todo';

const Todos = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="todos">
      {todos.length > 0 ? (
        todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))
      ) : (
        <p class="p-20 hover:bg-blue-200"></p>
      )}
    </div>
  );
};

export default Todos;