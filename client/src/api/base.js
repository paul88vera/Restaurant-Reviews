import axios from "axios";

export const baseApi = axios.create({ baseUrl: import.meta.env.VITE_API_URL });
