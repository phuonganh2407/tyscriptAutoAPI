import axios from "axios";
import { BASE_URL, TOKEN, TIMEOUT } from "./env";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Authorization: TOKEN,
  },
});

export default api;
