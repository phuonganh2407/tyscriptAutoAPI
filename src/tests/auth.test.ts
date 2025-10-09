import { AuthFlowHelper } from "../utils/infoAccount.helper";
import { getSession, clearSession } from "../utils/session.helper";

describe("🔐 Auth Flow Test", () => {
	beforeAll(() => {
		clearSession();
	});

	test("1️⃣ Login and save token", async () => {
		const token = await AuthFlowHelper.loginAndSaveToken();
		expect(token).toBeDefined();
		const session = getSession();
		expect(session.token).toBe(token);
		console.log("✅ Token saved and verified:", token);
	});

	test("2️⃣ Verify session data", () => {
		const session = getSession();
		expect(session.token).toBeTruthy();
		// Nếu có shopId thì kiểm tra luôn
		// expect(session.shopId).toBeTruthy();
		console.log("🧩 Current Session:", session);
	});
});
