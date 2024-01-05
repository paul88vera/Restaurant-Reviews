import { useLoaderData } from "react-router-dom";
import { getPost } from "../api/posts";

// eslint-disable-next-line react-refresh/only-export-components
function Post() {
  const post = useLoaderData();
  return (
    <>
      <div>
        <h1 className="page-title">{post.title}</h1>
        <div>{post.body}</div>
        <div></div>
      </div>
    </>
  );
}

async function loader({ request: { signal }, params }) {
  return getPost({ signal }, params);
}

export const postRoute = {
  loader,
  element: <Post />,
};
