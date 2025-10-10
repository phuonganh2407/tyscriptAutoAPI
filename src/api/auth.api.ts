import axiosClient from "./axiosClient";
import { endPoint } from "../../config/urls.config";

export async function login(phone: string, password: string) {
  return axiosClient.post(
    endPoint.auth + "/sign-in/password",
    {
      phoneNumber: phone,
      password: password
    }
  );
}
