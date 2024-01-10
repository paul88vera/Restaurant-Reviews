/*eslint-disabled */
import { Form, Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";
import PostCard from "../components/PostCard";
import FormGroup from "../components/FormGroup";
import { getUsers } from "../api/users";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react-refresh/only-export-components
function PostList() {
  const {
    users,
    post,
    searchParams: { query, userId },
  } = useLoaderData();
  const queryRef = useRef();
  const userIdRef = useRef();

  useEffect(() => {
    queryRef.current.value = query || "";
  }, [query]);
  useEffect(() => {
    userIdRef.current.value = userId || "";
  }, [userId]);

  if (!post) {
    // You might want to add a loading state or handle the case when user is still loading
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1 className="page-title">
        PostList
        <div className="title-btns">
          <Link className="btn btn-outline" to="/posts/new">
            New
          </Link>
        </div>
      </h1>
      <Form method="get" className="form mb-4">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Query</label>
            <input type="search" name="query" id="query" ref={queryRef} />
          </div>
          <FormGroup>
            <label htmlFor="userId">Author</label>
            <select type="search" name="userId" id="userId" ref={userIdRef}>
              <option value="">Any</option>
              {users.map((user) => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </FormGroup>
          <button className="btn">Filter</button>
        </div>
      </Form>
      <div className="card-grid">
        {/* an ALL POSTS map */}
        {post.map((data) => (
          <PostCard key={data.id} {...data} Link={Link} />
        ))}
      </div>
    </>
  );
}

async function loader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get("query");
  const userId = searchParams.get("userId");
  const filterParams = { q: query };
  if (userId !== "") filterParams.userId = userId;
  const post = await getPosts({ signal, params: filterParams });
  const users = getUsers({ signal });

  return {
    post: await post,
    users: await users,
    searchParams: { query, userId },
  };
}

export const postListLoader = {
  loader,
  element: <PostList />,
};
