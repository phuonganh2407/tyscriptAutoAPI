import axios from "axios";
import { getSession } from "../utils/session.helper";
import { baseURL } from "../../config/urls.config";

const axiosClient = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  //Check đảm bảo tồn tại headers
  if (!config.headers) {
    config.headers = {} as typeof config.headers;
  }

  // Get token and shopId from session
  const { token, shopId } = getSession();
  const env = process.env.ENVIRONMENT || 'dev';
  const { tenant } = require('../../config/accounts.config').accounts[env];

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (shopId) {
    config.headers.shopId = shopId;
  }

  // Thêm tenant vào header
  config.headers.tenant = tenant;

  // Log thông tin request
  console.log('Request Details:', {
    url: config.url,
    method: config.method?.toUpperCase(),
    headers: config.headers,
    data: config.data
  });

  return config;
});

axiosClient.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API error details:", {
      status: err.response?.status,
      statusText: err.response?.statusText,
      data: err.response?.data,
      url: err.config?.url,
      method: err.config?.method,
      headers: err.config?.headers,
    });
    throw err;
  }
);

export default axiosClient;
