import { AuthAPI } from "../api/auth.api";
// import { ShopAPI } from "../api/shop.api";
import { saveSession } from "./session.helper";
import { accounts } from "../../config/accounts.config";
import dotenv from "dotenv";

dotenv.config();

export const AuthFlowHelper = {
  /**
   * Đăng nhập → lấy token → lưu session
   */
  loginAndSaveToken: async () => {
    const env = process.env.ENVIRONMENT as "dev" | "stag" | "prod";
    const { username, password, tenant } = accounts[env];

    const res = await AuthAPI.login(username, password, tenant);
    const token = res.data.data?.token;

    if (!token) throw new Error("Không lấy được token!");

    saveSession(token, ""); // chỉ lưu token
    console.log("✅ Token saved:", token.substring(0, 10) + "...");
    return token;
  },

  /**
   * Lấy shopId → lưu session
   */
  // getShopIdAndSave: async () => {
  //   const res = await ShopAPI.getShopInfo();
  //   const shopId = res.data.data?.shopId || res.data.data?.id;

  //   if (!shopId) throw new Error("Không lấy được shopId!");

  //   saveSession(undefined, shopId);
  //   console.log("✅ ShopID saved:", shopId);
  //   return shopId;
  // },

  /**
   * Full flow login + lấy shopId
   */
  initFullAuthFlow: async () => {
    await AuthFlowHelper.loginAndSaveToken();
    // await AuthFlowHelper.getShopIdAndSave();
  },
};
