import { useLoaderData } from "react-router";
import { getPost } from "../api/posts";

export default function EditPost() {
  const edit = useLoaderData();
  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      <form method="post" action={`/posts/${edit.id}/edit`} className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">{edit.title}</label>
            <input type="text" name="title" id="title" value="qui est esse" />
          </div>
          <div className="form-group">
            <label htmlFor="userId">{edit.user}</label>
            <select name="userId" id="userId">
              <option value="1">Leanne Graham</option>
              <option value="2">Ervin Howell</option>
              <option value="3" selected="">
                Clementine Bauch
              </option>
              <option value="4">Patricia Lebsack</option>
              <option value="5">Chelsey Dietrich</option>
              <option value="6">Mrs. Dennis Schulist</option>
              <option value="7">Kurtis Weissnat</option>
              <option value="8">Nicholas Runolfsdottir V</option>
              <option value="9">Glenna Reichert</option>
              <option value="10">Clementina DuBuque</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body">
              {edit.body}
            </textarea>
          </div>
        </div>
        <div className="form-row form-btn-row">
          <a className="btn btn-outline" href={`/posts/${edit.id}`}>
            Cancel
          </a>
          <button className="btn">Save</button>
        </div>
      </form>
    </>
  );
}

function loader({ request: { signal }, params: { postId } }) {
  return getPost(postId, { signal });
}

export const postEdit = {
  loader,
  element: <EditPost />,
};
