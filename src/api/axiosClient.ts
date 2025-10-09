import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const axiosClient = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = process.env.TOKEN;
  const shopId = process.env.SHOP_ID;

  //Check đảm bảo tồn tại headers
  if (!config.headers) {
    config.headers = {} as typeof config.headers;
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (shopId) {
    config.headers.shopId = shopId;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API error:", err.response?.data || err.message);
    throw err;
  }
);

export default axiosClient;
