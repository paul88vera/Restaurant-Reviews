import { baseApi } from "./base";

export const getTodos = (options) => {
  return baseApi.get("todos", options).then((res) => res.data);
};
