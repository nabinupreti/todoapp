import { useEffect, useState } from "react";
import AddTodoForm from "./components/AddTodo";
import ListofTodos from "./components/ListOfTodos";
import MainLayout from "./layout/MainLayout";

const STORAGE_KEY = "todoapp.todos";

const initialTodos = [
  {
    id: 12332,
    text: "Buy groceries",
    completed: true,
  },
  {
    id: 23123,
    text: "Finish React todo app",
    completed: false,
  },
];

/**
 * We are developing a Todo web application in React.
 * This is the base application which holds all the
 * application components.
 */

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      // ignore and fall back to defaults
    }
    return initialTodos;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
      // ignore write errors (e.g. storage full or disabled)
    }
  }, [todos]);

  const addTodo = (rawText) => {
    const text = rawText.trim();
    if (!text) {
      return;
    }

    const id = parseInt(Math.random() * 100000, 10);
    const completed = false;
    const newTodo = { text, id, completed };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const markAsCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const total = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const remainingCount = total - completedCount;

  // NOTE: notice how the MainLayout component can take jsx as input using children prop ie. props.children
  return (
    <MainLayout>
      <ListofTodos
        todos={todos}
        markAsCompleted={markAsCompleted}
        deleteTodo={deleteTodo}
      />
      <AddTodoForm addTodo={addTodo} />
      <div className="todo-stats">
        <span>Total: {total}</span>
        <span>Completed: {completedCount}</span>
        <span>Remaining: {remainingCount}</span>
      </div>
    </MainLayout>
  );
}

export default App;
