"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const isValid_1 = require("../isValid");
(0, vitest_1.describe)("isValid", () => {
    (0, vitest_1.it)("arg '(){}' should be return true", () => {
        const result = (0, isValid_1.isValid)("(){}");
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("arg '(){}[]' should be return true", () => {
        const result = (0, isValid_1.isValid)("(){}[]");
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("arg '([)]({)()}' should be return false", () => {
        const result = (0, isValid_1.isValid)("([)]({)()}");
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("arg '({{[[()]]}})' should be return true", () => {
        const result = (0, isValid_1.isValid)("({{[[()]]}})");
        (0, vitest_1.expect)(result).toBe(true);
    });
});
//# sourceMappingURL=isValid.spec.js.map