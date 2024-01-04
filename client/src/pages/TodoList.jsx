import { useLoaderData } from "react-router-dom";
// import { getTodos } from "../api/todos";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
function TodoList() {
  const todos = useLoaderData();

  if (!todos) {
    // You might want to add a loading state or handle the case when user is still loading
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1 className="page-title">TodoList</h1>
      <ul>
        {/* Adding all todos - Completed & Not Completed */}
        {todos &&
          todos.map((data) => (
            <li
              key={data.id}
              className={data.completed ? "strike-through" : undefined}>
              {data.title}
            </li>
          ))}
      </ul>
    </>
  );
}

function loader({ request: { signal } }) {
  return axios
    .get("http://localhost:3000/todos", { signal })
    .then((res) => res.data);
}

export const todoListLoader = {
  loader,
  element: <TodoList />,
};
