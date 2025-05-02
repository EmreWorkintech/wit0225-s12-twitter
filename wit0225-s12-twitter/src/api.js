import axios from "axios";

function createAxiosInstance() {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: import.meta.env.VITE_API_ADDRESS,
    headers: { Authorization: `Bearer ${token}` },
  });
}

export const API = createAxiosInstance();
