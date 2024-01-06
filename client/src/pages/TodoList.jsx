import { Form, Link, useLoaderData } from "react-router-dom";
import { getTodos } from "../api/todos";
import TodoItem from "../components/TodoItem";

// eslint-disable-next-line react-refresh/only-export-components
function TodoList() {
  const todos = useLoaderData();

  if (!todos) {
    // You might want to add a loading state or handle the case when user is still loading
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1 className="page-title mb-2">
        Todo
        <div className="title-btns">
          <Link to="/new" className="btn">
            New
          </Link>
        </div>
      </h1>

      <Form className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Search</label>
            <input type="search" name="query" id="query" />
          </div>
          <button className="btn">Search</button>
        </div>
      </Form>

      <ul>
        {/* Adding all todos - Completed & Not Completed */}
        {todos.map((data) => (
          <TodoItem key={data.id} {...data} />
        ))}
      </ul>
    </>
  );
}

function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const todoListLoader = {
  loader,
  element: <TodoList />,
};
