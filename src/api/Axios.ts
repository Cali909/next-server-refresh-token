import { loginUser, logoutUser } from "@/auth/AuthService";
import { GetTokenType } from "@/types/AuthTypes";
import axios, { AxiosRequestConfig } from "axios";

export const AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

AxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 403 && !originalRequest._retry) {
      try {
        const response = await fetch("/api/token/refresh");
        const refreshToken: GetTokenType = await response.json();
        if (refreshToken) {
          console.log(refreshToken);

          //   loginUser(refreshToken);
        } else {
          //   logoutUser();
        }
      } catch (refreshError) {
        // logoutUser();
      }
    } else {
      return Promise.reject(error);
    }
  }
);
