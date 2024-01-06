/*eslint-disabled */
import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";
import PostCard from "../components/PostCard";

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
        {post.map((data) => (
          <PostCard key={data.id} {...data} Link={Link} />
        ))}
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return getPosts({ signal });
}

export const postListLoader = {
  loader,
  element: <PostList />,
};
