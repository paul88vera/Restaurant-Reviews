import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router";
import { getPost, updatePost } from "../api/posts";
import { getUsers } from "../api/users";
import PostForm, { postFormValidator } from "../components/PostForm";

export default function EditPost() {
  const { users, post } = useLoaderData();
  const { state } = useNavigation();
  const errors = useActionData();

  const isSubmitting = state === "submitting";

  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      <PostForm
        users={users}
        defaultValues={post}
        isSubmitting={isSubmitting}
        errors={errors}
      />
    </>
  );
}

async function action({ request, params: { postId } }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const errors = postFormValidator({ title, body, userId });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const post = await updatePost(
    postId,
    { title, body, userId },
    { signal: request.signal }
  );

  return redirect(`/posts/${post.id}`);
}

async function loader({ request: { signal }, params: { postId } }) {
  const post = getPost(postId, { signal });
  const users = getUsers({ signal });

  return { post: await post, users: await users };
}

export const postEdit = {
  loader,
  action,
  element: <EditPost />,
};
