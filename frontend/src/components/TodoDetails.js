const TodoDetails = ({ todo }) => {
  return (
    <div className="todo-details">
      <h3>{todo.title}</h3>
      <p>
        <strong>Priority (from 1-5): </strong>
        {todo.priority}
      </p>
      <p>
        <strong>Description: </strong>
        {todo.description}
      </p>
      <p>{todo.createdAt}</p>
    </div>
  );
};

export default TodoDetails;
