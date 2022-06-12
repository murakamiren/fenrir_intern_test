"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseBracket = void 0;
const reverseBracket = (s) => {
    if (s === "(") {
        return ")";
    }
    else if (s === "{") {
        return "}";
    }
    else if (s === "[") {
        return "]";
    }
    else {
        return "pass";
    }
};
exports.reverseBracket = reverseBracket;
//# sourceMappingURL=reverseBracket.js.map