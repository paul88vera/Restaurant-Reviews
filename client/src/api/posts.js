import { baseApi } from "./base";

export function getPosts(options) {
  return baseApi.get("posts", options).then(res => res.data);
}

export function getPost(options, params) {
  return baseApi.get(`posts/${params.postId}`, options).then(res => res.data);
}