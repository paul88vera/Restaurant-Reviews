import { useLoaderData } from "react-router-dom";
import axios from "axios";

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
  return axios
    .get(`http://localhost:3000/posts/${params.postId}`, { signal })
    .then((res) => res.data);
}

export const postRoute = {
  loader,
  element: <Post />,
};
