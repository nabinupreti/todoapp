import React from "react";

class TodoItem extends React.Component {
  componentDidMount() {
    console.log("component mount", this.props.todo.text);
  }

  componentWillUnmount() {
    console.log("component unmount", this.props.todo.text);
  }

  handleCompleteClick = () => {
    const { todo, markAsCompleted } = this.props;
    markAsCompleted(todo.id);
  };

  handleDeleteClick = () => {
    const { todo, deleteTodo } = this.props;
    deleteTodo(todo.id);
  };

  render() {
    const todoItem = this.props.todo;
    const isCompleted = todoItem.completed;

    return (
      <div className={isCompleted ? "todo completed" : "todo"}>
        <div className="todo-text">{todoItem.text}</div>
        {!isCompleted ? (
          <button type="button" onClick={this.handleCompleteClick}>
            Mark as Completed
          </button>
        ) : (
          <i>Completed</i>
        )}
        <button
          type="button"
          className="todo-delete"
          onClick={this.handleDeleteClick}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default TodoItem;
