import { useRef, useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = todoText.trim();

    if (!value) {
      setError("Please enter a todo before submitting.");
      focusInput();
      return;
    }

    addTodo(value);
    setTodoText("");
    setError("");
    focusInput();
  };

  const handleChange = (event) => {
    const inputText = event.target.value;
    setTodoText(inputText);

    if (error && inputText.trim()) {
      setError("");
    }
  };

  return (
    <div className="todo-form">
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          placeholder="Add Todo Item"
          type="text"
          value={todoText}
          onChange={handleChange}
        />
        <button type="submit">Submit Todo</button>
      </form>
      {error ? <p className="todo-error">{error}</p> : null}
    </div>
  );
};

export default AddTodo;
