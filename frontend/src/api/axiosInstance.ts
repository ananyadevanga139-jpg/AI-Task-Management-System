import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-task-manager-tqnx.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add JWT token automatically
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token && config.headers) {
      config.headers.set(
        "Authorization",
        `Bearer ${token}`
      );
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;