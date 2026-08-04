import API from "./axiosInstance";

export const registerUser = (data: any) => {
  return API.post("/auth/register", data);
};

export const loginUser = (data: any) => {
  return API.post("/auth/login", data);
};