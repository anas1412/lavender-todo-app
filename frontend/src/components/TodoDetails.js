const TodoDetails = ({ todo }) => {
  return (
    <div className="todo-details">
      <h4>{todo.title}</h4>
      <p>
        <strong>Priority: </strong>
        {todo.priority}
      </p>
      <p>
        <strong>Description: </strong>
        {todo.description}
      </p>
      <p>Created at {todo.createdAt}</p>
    </div>
  );
};

export default TodoDetails;
