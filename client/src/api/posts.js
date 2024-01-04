import { baseApi } from "./base";

export const getPosts = (options) => {
  return baseApi.get("posts", options).then((res) => res.data);
};
