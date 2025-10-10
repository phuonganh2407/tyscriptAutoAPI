/**
 * Thư viện dùng để đọc biến môi trường từ file .env
 * Gọi để load biến môi trường vào process.env
 */
import dotenv from "dotenv";
import path from "path";

const ENV = process.env.ENVIRONMENT || "dev";
const envPath = path.resolve(`.env.${ENV}`);
console.log("envPath",envPath)

dotenv.config({ path: envPath });

export const baseURL = process.env.BASE_URL;
export const productBaseURL = process.env.BASE_PRODUCT_URL;

export const endPoint = {
  auth: `${baseURL}/authentication/api/v1`,
  product: `${baseURL}/product/api/v1`,
  customer: `${baseURL}/customer/api/v1`,
  order: `${baseURL}/ordering/api/v1`,
  inventory: `${baseURL}/inventory/api/v1`,
  cashbook: `${baseURL}/cashbook/api/v1`,
  file: `${baseURL}/file/api/v1`,
};

export const baseProductEndpoints = {
  attributes: `${productBaseURL}/attribute`,



}