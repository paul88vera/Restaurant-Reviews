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
      <h1 className="page-title">
        PostList
        <div className="title-btns">
          <a className="btn btn-outline" href="/posts/new">
            New
          </a>
        </div>
      </h1>
      <form method="get" action="/posts" className="form mb-4">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Query</label>
            <input type="search" name="query" id="query" />
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select type="search" name="userId" id="userId">
              <option value="">Any</option>
              <option value="1">Leanne Graham</option>
              <option value="2">Ervin Howell</option>
              <option value="3">Clementine Bauch</option>
              <option value="4">Patricia Lebsack</option>
              <option value="5">Chelsey Dietrich</option>
              <option value="6">Mrs. Dennis Schulist</option>
              <option value="7">Kurtis Weissnat</option>
              <option value="8">Nicholas Runolfsdottir V</option>
              <option value="9">Glenna Reichert</option>
              <option value="10">Clementina DuBuque</option>
            </select>
          </div>
          <button className="btn">Filter</button>
        </div>
      </form>
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
