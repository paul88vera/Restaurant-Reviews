import { Link, useLoaderData } from "react-router-dom";
// import { getUsers } from "../api/users";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
function UserList() {
  const user = useLoaderData();

  if (!user) {
    // You might want to add a loading state or handle the case when user is still loading
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1 className="page-title">UserList</h1>
      <div className="card-grid">
        {user.map((user) => (
          <div className="card" key={user.id}>
            <div className="card-header">{user.name}</div>
            <div className="card-body">
              <div>{user.company.name}</div>
              <div>{user.website}</div>
              <div>{user.email}</div>
            </div>
            <div className="card-footer">
              <Link className="btn" to={user.id.toString()}>
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
    .get("http://localhost:3000/users", { signal })
    .then((res) => res.data);
}

export const userListLoader = {
  loader,
  element: <UserList />,
};
