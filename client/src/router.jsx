import { createBrowserRouter, Navigate } from "react-router-dom";
import { postListLoader } from "./pages/PostList";
import { userListLoader } from "./pages/UserList";
import { todoListLoader } from "./pages/TodoList";
import { postRoute } from "./pages/Post";
import { userRoute } from "./pages/User";
import Error from "./pages/Error";
import RootLayout from "./layouts/RootLayout";
import ErrorMessage from "./pages/ErrorMessage";
import { postEdit } from "./pages/EditPost";
import { newPost } from "./pages/NewPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorMessage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",
            children: [
              { index: true, ...postListLoader },
              {
                path: ":postId",
                children: [
                  { index: true, ...postRoute },
                  { path: "edit", ...postEdit },
                ],
              },
              { path: "new", ...newPost },
            ],
          },
          {
            path: "users",
            children: [
              { index: true, ...userListLoader },
              { path: ":userId", ...userRoute },
            ],
          },
          {
            path: "todos",
            index: true,
            ...todoListLoader,
          },
          // { path: "/new", index: true, element: <NewTodo /> },
        ],
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
