import TodoItem from "./TodoItem";

function ListOfTodos(props) {
  const { todos, markAsCompleted, deleteTodo } = props;
  return (
    <div className="list-of-todos">
      <h2>List of Todos</h2>

      {todos.length === 0 ? (
        <p>No todos yet. Add your first one!</p>
      ) : (
        todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            markAsCompleted={markAsCompleted}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}

export default ListOfTodos;
