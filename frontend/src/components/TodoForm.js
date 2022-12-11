import { useState } from "react";
import { useTodosContext } from "../hooks/useTodosContext";

const TodoForm = () => {
  const { dispatch } = useTodosContext();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = { title, priority, description };

    const response = await fetch("http://localhost:4000/api/todo", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setTitle("");
      setPriority("");
      setDescription("");
      setError(null);
      console.log("new todo added!!");
      dispatch({ type: "CREATE_TODOS", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>add a new todo</h3>

      <label>todo title: (*)</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>todo priority: (1-5)</label>
      <input
        type="number"
        onChange={(e) => setPriority(e.target.value)}
        value={priority}
      />

      <label>todo description: </label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <button>add a todo</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TodoForm;
