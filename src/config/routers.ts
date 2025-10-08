import "dotenv/config";

const ENV = process.env.ENVIRONMENT || "dev";

/**
 * base URL của các môi trường dev, stag, prod
 */
const baseURL = {
  dev: "https://gateway.dev-v3.wionpos.public.rke.app.dev.tmtco.org",
  stg: "https://gateway.stg-v3.wionpos.public.rke.app.stg.tmtco.org",
  prod: "https://gateway-v3.wionpos.public.rke.app.tmtco.org",
}[ENV];

export const endPoint = {
  auth: `${baseURL}/authentication/api/v1`,
  product: `${baseURL}/product/api/v1`,
  customer: `${baseURL}/customer/api/v1`,
  order: `${baseURL}/ordering/api/v1`,
  inventory: `${baseURL}/inventory/api/v1`,
  cashbook: `${baseURL}/cashbook/api/v1`,
  file: `${baseURL}/file/api/v1`, // cái này riêng
};

