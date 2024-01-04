/*eslint-disabled */
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
// import { getPosts } from "../api/posts";

// eslint-disable-next-line react-refresh/only-export-components
function PostList() {
  const post = useLoaderData();

  if (!post) {
    // You might want to add a loading state or handle the case when user is still loading
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1 className="page-title">PostList</h1>
      <div className="card-grid">
        {/* an ALL POSTS map */}
        {post &&
          post.map((data, postId) => (
            <div className="card" key={[data.id, postId]}>
              <div className="card-header">{data.title}</div>
              <div className="card-body">
                <div className="card-preview-text">{data.body}</div>
              </div>
              <div className="card-footer">
                <Link to={`/posts/${postId}`} className="btn">
                  View
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return axios
    .get("http://localhost:3000/posts", { signal })
    .then((res) => res.data);
}

export const postListLoader = {
  loader,
  element: <PostList />,
};