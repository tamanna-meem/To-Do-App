import { TodoProvider } from './context/TodoContext';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1 class="font-bold text-4xl mx-5 text-white">Todo App</h1>
        <AddTodo />
        <Todos />
      </div>
    </TodoProvider>
  );
}

export default App;