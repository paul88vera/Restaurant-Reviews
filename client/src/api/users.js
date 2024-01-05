import { baseApi } from "./base";

export const getUsers = (options) => {
  return baseApi.get("users", options).then((res) => res.data);
};

export const getUser = (options, params) => {
  return baseApi.get(`users/${params.userId}`, options).then((res) => res.data);
};
