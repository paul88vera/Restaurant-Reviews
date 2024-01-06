import { useLoaderData, Link } from "react-router-dom";
import { getUser } from "../api/users";
import { getTodos } from "../api/todos";
import { getPosts } from "../api/posts";
import TodoItem from "../components/TodoItem";
import PostCard from "../components/PostCard";

// eslint-disable-next-line react-refresh/only-export-components
function User() {
  const { user, posts, todos } = useLoaderData();

  return (
    <>
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b> {user.address.street}, {user.address.suite},{" "}
        {user.address.city} {user.address.zipcode}
      </div>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {posts.map((data) => (
          <PostCard key={data.id} {...data} Link={Link} />
        ))}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        {todos && todos.map((data) => <TodoItem key={data.id} {...data} />)}
      </ul>
    </>
  );
}

async function loader({ request: { signal }, params: { userId } }) {
  const posts = getPosts({ signal, params: { userId } });
  const todos = getTodos({ signal, params: { userId } });
  const user = getUser(userId, { signal });

  return { posts: await posts, todos: await todos, user: await user };
}

export const userRoute = {
  loader,
  element: <User />,
};
