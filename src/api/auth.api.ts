import axiosClient from "./axiosClient";
import { endPoint } from "../../config/urls.config";

export const AuthAPI = {
  login: async (username: string, password: string, tenant: string) => {
    return axiosClient.post(`${endPoint.auth}/login`, {
      username,
      password,
      tenant,
    });
  },
};
