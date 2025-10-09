/**
 * Thư viện dùng để đọc biến môi trường từ file .env
 * Gọi để load biến môi trường vào process.env
 */
import dotenv from "dotenv";
dotenv.config();

const ENV = process.env.ENVIRONMENT || "dev";
const baseURL = process.env.BASE_URL;

export const endPoint = {
  auth: `${baseURL}/authentication/api/v1`,
  product: `${baseURL}/product/api/v1`,
  customer: `${baseURL}/customer/api/v1`,
  order: `${baseURL}/ordering/api/v1`,
  inventory: `${baseURL}/inventory/api/v1`,
  cashbook: `${baseURL}/cashbook/api/v1`,
  file: `${baseURL}/file/api/v1`,
};
