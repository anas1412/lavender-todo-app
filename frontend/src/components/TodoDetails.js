import { useTodosContext } from "../hooks/useTodosContext";

//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const TodoDetails = ({ todo }) => {
  const { dispatch } = useTodosContext();
  const handleCLick = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URI + "/api/todo/" + todo._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_TODOS", payload: json });
    }
  };

  return (
    <div className="todo-details">
      <h4>{todo.title}</h4>
      <p>
        <strong>Priority: </strong>
        {todo.priority}
      </p>
      <p>{todo.description}</p>
      <p>
        {formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleCLick}>
        delete
      </span>
    </div>
  );
};

export default TodoDetails;
