import axios from "axios";

function createAxiosInstance() {
  return axios.create({
    baseURL: import.meta.env.VITE_API_ADDRESS,
    headers: { "x-api-key": "reqres-free-v1" },
  });
}

export const API = createAxiosInstance();
