import { describe, expect, it } from "vitest";
import { isValid } from "../isValid";

describe("isValid", () => {
	it("arg '(){}' should be return true", () => {
		const result = isValid("(){}");
		expect(result).toBe(true);
	});

	it("arg '(){}[]' should be return true", () => {
		const result = isValid("(){}[]");
		expect(result).toBe(true);
	});

	it("arg '([)]({)()}' should be return false", () => {
		const result = isValid("([)]({)()}");
		expect(result).toBe(false);
	});

	it("arg '({{[[()]]}})' should be return true", () => {
		const result = isValid("({{[[()]]}})");
		expect(result).toBe(true);
	});

	it("arg '({[)({)()}}]' should be return false", () => {
		const result = isValid("({[)({)()}}]");
		expect(result).toBe(false);
	});

	it("arg '{([})]' should be return false", () => {
		const result = isValid("{([})]'");
		expect(result).toBe(false);
	});

	it("arg '({()})' should be return true", () => {
		const result = isValid("({()})");
		expect(result).toBe(true);
	});
});
