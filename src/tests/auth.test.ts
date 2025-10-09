import { baseProductEndpoints } from "../../config/urls.config";
import { AuthFlowHelper } from "../utils/infoAccount.helper";
import { getSession, clearSession } from "../utils/session.helper";
import { createRandomString } from "../utils/util";

describe("🔐 Auth Flow Test", () => {
	beforeAll(() => {
		clearSession();
	});

	test("Case 1: Login and save token", async () => {
		const token = await AuthFlowHelper.loginAndSaveToken();
		expect(token).toBeDefined();
		const session = getSession();
		expect(session.token).toBe(token);
		console.log("Token saved and verified:", token);
	});

	test("Case 2: Verify session data", () => {
		const session = getSession();
		expect(session.token).toBeTruthy();
		// Nếu có shopId thì kiểm tra luôn
		// expect(session.shopId).toBeTruthy();
		console.log("Current Session:", session);
	});
});
