import { describe, expect, it } from "vitest";
import { isValid } from "../isValid";

describe("isValid", () => {
	it("arg 'test' should be return true", () => {
		const result = isValid("test");
		expect(result).toBe(true);
	});
});
