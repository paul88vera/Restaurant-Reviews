import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { getUsers } from "../api/users";
import PostForm, { postFormValidator } from "../components/PostForm";
import { createPost } from "../api/posts";

export default function NewPost() {
  const users = useLoaderData();
  const { state } = useNavigation();
  const errors = useActionData();

  const isSubmitting = state === "submitting";

  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm users={users} isSubmitting={isSubmitting} errors={errors} />
    </>
  );
}

function loader({ request: { signal } }) {
  return getUsers({ signal });
}
async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const errors = postFormValidator({ title, body, userId });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const post = await createPost(
    { title, body, userId },
    { signal: request.signal }
  );

  return redirect(`/posts/${post.id}`);
}

export const newPost = {
  loader,
  action,
  element: <NewPost />,
};
