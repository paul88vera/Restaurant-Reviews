import { baseApi } from "./base";

export const getComments = (options, postId) => {
  return baseApi
    .get(`/posts/${postId}/comments`, options)
    .then((res) => res.data);
};
