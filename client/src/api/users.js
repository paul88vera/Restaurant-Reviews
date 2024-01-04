import { baseApi } from "./base";

export const getUsers = (options) => {
  return baseApi.get("users", options).then((res) => res.data);
};
